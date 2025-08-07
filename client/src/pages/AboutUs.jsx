import React from 'react';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className="container-fluid bg-dark text-light py-5" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" // You can replace with local image
              alt="About FoodCourt"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h2 className="mb-4 text-warning">About Our FoodCourt</h2>
            <p className="lead">
              Welcome to <strong>R.M.K Engineering College FoodCourt</strong>, where taste meets technology. Our food ordering system is designed to serve students and staff with quick, easy, and hygienic meals, all at your fingertips.
            </p>
            <p>
              From sizzling burgers to traditional meals, we ensure every dish is made with quality and love. No more long queues — just browse, order, and enjoy!
            </p>
            <ul className="list-unstyled mt-3">
              <li>🍔 Quick Ordering System</li>
              <li>🧼 Hygienic Food Preparation</li>
              <li>⚡ Instant Notifications</li>
              <li>💳 Digital Payments Supported</li>
            </ul>
            <button className="btn btn-danger mt-4"><Link to={"/home"}>Order Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
