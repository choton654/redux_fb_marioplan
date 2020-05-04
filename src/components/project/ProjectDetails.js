import React, { Component } from 'react';
// import { deleteProject } from '../../store/action/projectAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class ProjectDetails extends Component {
  handleDelete = () => {
    const { project, firestore, history } = this.props;
    firestore
      .delete({ collection: 'projects', doc: project.title })
      .then(history.push('/'));
    // firestore
    //   .collection('projects')
    //   .doc(project.title)
    //   .delete()
    //   .then(history.push('/'));
  };

  render() {
    const { project } = this.props;
    if (project) {
      return (
        <div className='container section project-details'>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <span className='card-title'>{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{project.createdAt.toDate().toString().slice(0, 15)}</div>
            </div>
          </div>
          <button type='submit' onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      );
    } else {
      return <div className='container center'>Loading Projects..</div>;
    }
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log(state);

  const { id } = ownprops.match.params;
  const projects = state.fireStore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    firestore: state.firestore,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteProject: (id) => dispatch(deleteProject(id)),
//   };
// };

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects',
    },
  ])
)(ProjectDetails);
