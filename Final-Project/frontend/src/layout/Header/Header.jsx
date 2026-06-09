import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎓E-Learn</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header
