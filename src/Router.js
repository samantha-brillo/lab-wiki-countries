import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import Navbar from './components/Navbar';

function Router() {
  const Home = () => <h2>Home</h2>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            path="countriesList"
            element={<CountriesList countries={countriesData} />}
          >
            <Route
              path=":id"
              element={<CountryDetails countries={countriesData} />}
            />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
