import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/events">Events</Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  );
}

export default Navbar;