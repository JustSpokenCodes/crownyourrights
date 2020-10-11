import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

//components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='sidebar'>
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
          <p className="copyright">&copy; BeNice 2020</p>
          <a href="#" class="fa fa-facebook">https://www.facebook.com/bria.hatcher</a>
          <a href="#" class="fa fa-twitter">https://twitter.com/bbybria</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
