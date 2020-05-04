import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.fireStore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.fireStore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createdAt', 'desc'],
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc'],
    },
  ])
)(Dashboard);
