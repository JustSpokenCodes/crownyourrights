import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";

//components
//import Home from "./components/Home";
import About from "./components/About";
//import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>BeNice</h1>
        </div>
        <nav className='app-nav'>
          <a href="https://www.crownyourrights.com/">Home</a>
          <Link to='/about'>About</Link>
          <a href="#">Contact</a>
        </nav>
      </header>
        <p>Coming Soon...</p>
          <h1><b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i></h1>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
