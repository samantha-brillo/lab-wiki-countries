import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const currentCountry = countries.filter((country) => country.cca3 === id);
    setCountry(currentCountry[0]);
  }, [countries, id]);
  console.log(country);
  return (
    <div className="col-7">
      <h1>{country.name && country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital && country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders &&
                  country.borders.map((borderCode) => {
                    // buscamos el país que corresponde al código país y lo guardamos en una variable
                    const borderCountry = countries.find(
                      (country) => country.cca3 === borderCode
                    );
                    return (
                      <li key={borderCode}>
                        <Link to={`/${borderCode}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
