import React from "react";

const Home = () => {
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
        <section>
            <p>Coming Soon...</p>
            <h1><b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i></h1>
            <button id="custom-btn" class='crown-button'><span>Come</span>And Lets Work</button>
        </section>
    </div>
    )
}