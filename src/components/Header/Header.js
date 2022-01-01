import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/ema-john-simple/shop">
        <img src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ema-john-simple/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ema-john-simple/review">Review</a>
        </li>  
         <li className="nav-item">
          <a className="nav-link" href="/ema-john-simple/inventory">Inventory</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;