import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {' '}
      <div className="footer-logo">🎓 E-Learn </div>
      <p className="footer-text">© 2026 E-Learn. All Rights Reserved.</p>
      <div className="footer-social">
        <Link to="#" className="social-icon">
          <FaFacebookF />
        </Link>

        <Link to="#" className="social-icon">
          <FaInstagram />
        </Link>

        <Link to="#" className="social-icon">
          <FaLinkedinIn />
        </Link>

        <Link to="#" className="social-icon">
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
