import "./huddle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Illustration from "../assets/images/illustration-mockups.svg";
import Logo from "../assets/images/logo.svg";

const Huddle = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <main className="container">
        <section className="community">
          <img src={Illustration} alt="Illustration mockups" />

          <div className="information">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="/" className="register">
              Register
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="social">
          <a href="#" className="icon-social">
            <FontAwesomeIcon className="fa-icon fa-facebook" icon={faFacebookF}/>
          </a>
          <a href="#" className="icon-social">
            <FontAwesomeIcon className="fa-icon fa-twitter" icon={faTwitter} />
          </a>
          <a href="#" className="icon-social">
            <FontAwesomeIcon  className="fa-icon fa-insta" icon={faInstagram} />
          </a>
        </div>
      

      <div>
        <p className="attribution">
          Challenge by {" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          , Coded by{" "}
          <a href="https://www.frontendmentor.io/home">MJZtein</a>.
        </p>
      </div>
      </footer>
    </>
  );
};

export default Huddle;
