import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/countriesList">
            WikiCountries
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
