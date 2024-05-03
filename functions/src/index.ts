const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { Firestore } = require('firebase-admin/firestore');
const { info, error } = require('firebase-functions/logger');
const functionsV1 = require('firebase-functions/v1');

initializeApp();

export const authUser = functionsV1
  .region('asia-northeast1')
  .auth.user()
  .onCreate((member: any) => {
    info(member);

    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'member',
        'x-hasura-allowed-roles': ['member'],
        'x-hasura-member-id': member.uid,
      },
    };

    return admin
      .auth()
      .setCustomUserClaims(member.uid, customClaims)
      .then(() => {
        // テーブル
        // TODO: member has_many ログイン方法
        // const queryStr = {
        //   query: `
        //   mutation create Member($id: String = "", $email: String = "") {
        //     insert_users_one(object: {id: $id, email: $email}, on_conflict: {constraint: users_pkey}) {
        //       id
        //       email
        //     }
        //   }
        //   `,
        //   variables: { id: member.uid, email: member.email },
        // };

        // // POST record to hasuraDB
        // fetch('<hasura_db_endpoint>', {
        //   method: 'post',
        //   body: JSON.stringify(queryStr),
        //   headers: {
        //     'x-hasura-admin-secret': '<hasura_db_secret>',
        //   },
        // });

        // firestoreにuidを入れる
        admin.firestore().collection('member_meta').doc(member.uid).create({
          refreshTime: Firestore.FieldValue.serverTimestamp(),
        });
      })
      .catch((e: any) => {
        error(e);
      });
  });
