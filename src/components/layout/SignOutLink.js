import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignOutLink() {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/signup'>SignUp</NavLink>
      </li>

      <li>
        <NavLink to='/signin'>LogIn</NavLink>
      </li>
    </ul>
  );
}
