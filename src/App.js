import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/img/logo.png';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SinglePage from './pages/Single';

const Header = () => (
  <nav className="navbar bg-faded">
    <div className="container">
      <ul className="nav navbar-nav pull-sm-left">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            HOME</Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-logo mx-auto">
        <li className="nav-item">
          <img src={Logo} alt="logo" />
        </li>
      </ul>
      <ul className="nav navbar-nav pull-sm-right">
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  </nav>
)

const Footer = () => (
  <div className="footer">
    <p className="text-center">&copy;2019 InfoTravel Malang</p>
  </div>
);


function App() {
  return (
    <div>
      <Header/>
      <div className="page-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/:id" component={SinglePage} />
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
