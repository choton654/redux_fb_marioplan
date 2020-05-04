const initialState = {
  projects: [{ id: 1, title: 'comming soon!!', content: 'comming soon!!' }],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;

    default:
      return state;
  }
};
export default projectReducer;
// case 'DELETE_SUCCESS':
// return {
//   ...state,
//   projects: state.projects.filter(
//     ( project ) => project.id !== action.payload
//   ),
// };
