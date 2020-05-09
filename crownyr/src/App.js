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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
