import React from 'react';
import { Link, Route, Switch } from "react-router-dom";

//components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src='./img/crown.jpg' alt="logo for cyr" />
          <h1>BeNice</h1>
        </div>
        <nav className='app-nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <footer>
        <div className="footer">
          <p>
            <b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i> goal is to give support and guidance to youth on being independent through mentorship.
          </p>
          <p className="copyright">&copy; Crown Your Rights 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
