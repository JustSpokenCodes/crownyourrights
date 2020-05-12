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
        <nav className='app-nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <footer>
        <div className="footer">
          <h3><b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i> goal is to give support and guidance to youth adults on being independent through mentorship.</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
