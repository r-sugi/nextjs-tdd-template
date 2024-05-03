const { initializeApp, auth, firestore } = require('firebase-admin/app');
const { info, error } = require('firebase-functions/logger');
const functionsV1 = require('firebase-functions/v1');

initializeApp();

export const helloWorld = functionsV1
  .region('asia-northeast1')
  .https.onRequest((request: any, response: any) => {
    info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
  });

const createUser = `
mutation createUser($id: String = "", $email: String = "") {
  insert_users_one(object: {id: $id, email: $email}, on_conflict: {constraint: users_pkey, update_columns: []}) {
    id
    email
  }
}
`;

export const authUser = functionsV1
  .region('asia-northeast1')
  .auth.user()
  .onCreate((user: any) => {
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-user-id': user.uid,
      },
    };

    return auth()
      .setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        const queryStr = {
          query: createUser,
          variables: { id: user.uid, email: user.email },
        };

        fetch('<url>', {
          method: 'post',
          body: JSON.stringify(queryStr),
          headers: {
            'x-hasura-admin-secret': '<secret>',
          },
        });

        firestore().collection('user_meta').doc(user.uid).create({
          refreshTime: firestore.FieldValue.serverTimestamp(),
        });
      })
      .catch((e: any) => {
        error(e);
      });
  });
