import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const NavbarLink = ({ auth }) => {
  return (
    <div>
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            MarioPlan
          </Link>
          {auth ? <SignInLink /> : <SignOutLink />}
        </div>
      </nav>
    </div>
  );
};

const makeStateToProps = (state) => {
  console.log(state);

  return {
    auth: state.firebase.auth.uid,
    profile: state.firebase.profile,
  };
};

export default connect(makeStateToProps)(NavbarLink);
