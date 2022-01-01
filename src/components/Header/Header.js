import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/ema-john-simple/shop">
        <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ema-john-simple/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ema-john-simple/review">Review</Link>
        </li>  
         <li className="nav-item">
          <Link className="nav-link" to="/ema-john-simple/inventory">Inventory</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;