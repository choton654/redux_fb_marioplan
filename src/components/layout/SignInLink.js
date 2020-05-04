import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authAction';

const SignInLink = (props) => {
  // console.log(props);

  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>

      <li>
        <a href='/' onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        {!props.profile.isEmpty ? (
          <NavLink to='/' className='btn btn-floating pink lighten'>
            {props.profile.initials}
          </NavLink>
        ) : null}
      </li>
    </ul>
  );
};

const makeStateToProps = (state) => {
  console.log(state);

  return {
    profile: state.firebase.profile,
  };
};
const mapDispatctToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(makeStateToProps, mapDispatctToProps)(SignInLink);
