export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth;
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};

// export const deleteProject = (id) => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection('projects')
//       .doc('DC')
//       .delete()
//       .then(() => {
//         dispatch({ type: 'DELETE_SUCCESS', payload: id });
//       })
//       .catch(function (error) {
//         console.error('Error removing document: ', error);
//       });
//   };
// };

// .push('projects', {
//   ...project,
//   authorFirstName: 'John',
//   authorLastName: 'Smith',
//   authorId: 12345,
//   createdAt: new Date(),
// })
// const dbConnect = getFireBase().firestore();
// dbConnect.collection('projects');
