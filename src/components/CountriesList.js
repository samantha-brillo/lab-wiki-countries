import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function CountriesList(props) {
  const { countries } = props;
  return (
    <div>
      <h1>List of countries</h1>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((country, id) => (
            <Link
              key={id}
              className="list-group-item list-group-item-action"
              to={`/countriesList/${country.cca3}`}
            >
              {country.name.common} <br />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default CountriesList;
