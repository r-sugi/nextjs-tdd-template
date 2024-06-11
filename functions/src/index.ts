const admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { info, error } = require("firebase-functions/logger");
const functionsV1 = require("firebase-functions/v1");

initializeApp();

type Member = {
	uid: string;
	email: string;
};

export const authUser = functionsV1
	.region("asia-northeast1")
	.auth.user()
	.onCreate((member: Member) => {
		info(member);

		const customClaims = {
			"https://hasura.io/jwt/claims": {
				"x-hasura-default-role": "member",
				"x-hasura-allowed-roles": ["member"],
				"x-hasura-member-id": member.uid,
			},
		};

		return admin
			.auth()
			.setCustomUserClaims(member.uid, customClaims)
			.then(async () => {
				const queryStr = {
					query: `
          mutation MyMutation($uid: String!, $email: String!) {
            insert_users_one(object: {member: {data: {memberLoginGoogle: {data: {uid: $uid, email: $email}}}}}) {
              member {
								id
                userId
                memberLoginGoogle {
                  createdAt
                  uid
                  email
                }
              }
            }
          }
          `,
					variables: { uid: member.uid, email: member.email },
				};

				// TODO: 環境変数にする
				try {
					const res = await fetch("http://localhost:8080/v1/graphql", {
						method: "post",
						body: JSON.stringify(queryStr),
						headers: {
							"x-hasura-admin-secret": "xxxxxx", // TODO: 環境変数にする
						},
					});
					const result = await res.json();
					if (result.errors && result.errors.length > 0) {
						error(result.errors);
						return;
					}
				} catch (e) {
					error(e);
				}
			})
			.catch((e: unknown) => {
				error(e);
			});
	});
