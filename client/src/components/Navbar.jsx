import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src="/images/logo.png" alt="Logo" className="logo-image" />
      <div className="logo">R.M.K Engineering College FoodCourt</div>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <Link to="/signup" className="signup-link">
        <button className="signUpBtn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
