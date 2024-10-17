import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
export default function Login() {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow name="email" type="email" defaultValue="john@gmail.com" />
        <FormRow name="password" type="password" defaultValue="secret1234" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
