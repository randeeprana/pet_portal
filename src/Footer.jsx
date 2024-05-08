import "./Footer.css";
import { CursorFill } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="row justify-content-center text-white" id="footer">
      <div className="col-md-3 col-11">
        <h4>About</h4>
        <a href="">History</a> <br />
        <a href="">Our Team</a> <br />
        <a href="">Brand Guidelines</a> <br />
        <a href="">Tearms&Condition</a> <br />
        <a href="">Privacy Policy</a> <br />
      </div>
      <div className="col-md-2 col-11">
        <h4>Services</h4>
        <a href="">How to Order</a> <br />
        <a href="">Our Product</a> <br />
        <a href="">Order State</a> <br />
        <a href="">Promo</a> <br />
        <a href="">Payment Method </a> <br />
      </div>
      <div className="col-md-4 col-11 text-end">
        <h4>Title Here</h4>
        <p>Pawfectly Pet-Friendly Fun Here!</p>
        <form action="" id="footer-form">
          <input type="text" id="footer-search-box" />
          <button type="submit" id="footer-search-submit">
            <CursorFill className="submit-icon" />
          </button>
        </form>
        
        <a href="https://www.instagram.com/ranaaaa__07/" target="_blank">
        <Instagram className="instagram-icon link-light text-decoration-none social-icon" />
      </a>

      <a href="https://github.com/randeeprana" target="_blank">
        <Github className="github-icon link-light text-decoration-none social-icon" />
      </a>

        <a href="https://twitter.com/Randeep_rana7" target="_blank" >
        <Twitter className="twitter-icon link-light text-decoration-none social-icon" />
      </a>

         <a href="https://www.linkedin.com/in/randeep-rana-705a09245/" target="_blank" >
        <Linkedin className="linkedin-icon link-light text-decoration-none social-icon" />
      </a>
      </div>
    </div>
  );
};

export default Footer;
