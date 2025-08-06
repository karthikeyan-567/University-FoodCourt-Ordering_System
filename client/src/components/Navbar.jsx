import './Navbar.css';

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
        <button className="signUpBtn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
