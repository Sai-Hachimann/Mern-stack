import { Logo } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>finding</span> app
          </h1>
          <p>
            I'm baby bushwick sriracha cronut brunch farm-to-table subway tile
            pop-up pork belly iceland portland dreamcatcher readymade
            vibecession tote bag. Brooklyn poutine trust fund, taxidermy
            letterpress normcore leggings twee squid knausgaard edison bulb
            vegan bespoke. Austin art party vibecession VHS pitchfork, kogi
            organic four dollar toast plaid mukbang. Cupping YOLO truffaut
            dreamcatcher, succulents sus sartorial mixtape try-hard tbh street
            art tonx gochujang.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="main-img" className="img main-img" />
      </div>
    </Wrapper>
  );
}
