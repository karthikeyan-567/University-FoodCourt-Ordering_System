// import SignUp from '../pages/SignUp';
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
        {/* <a href="#">Home</a> */}
        <Link to="/home" >Home</Link>
        <a href="#categories-section">Menu</a>
        <Link to={"/Cart"}>Order lobby</Link>
       <Link to={"/about"}> About Us</Link>
        
        <button className="signUpBtn"><Link to={"/Signup"}> Sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
