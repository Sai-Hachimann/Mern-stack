import { FormRow, Logo } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
export default function Register() {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" id="name" type="text" defaultValue="john" />
        <FormRow
          name="lastName"
          id="lastName"
          type="text"
          defaultValue="smith"
          labelText="last name"
        />
        <FormRow name="location" id="location" type="text" defaultValue=" " />
        <FormRow
          name="email"
          id="email"
          type="email"
          defaultValue="john@gmail.com"
        />
        <FormRow
          name="password"
          id="password"
          type="password"
          defaultValue="abcdef "
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
