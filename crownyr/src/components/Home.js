import React from "react";
import './home.scss';

const Home = () => {
    return (
        <div className="container">
            <header>
            <h1>Crown Your Rights</h1> 
                <section className="about">
                <img className="cyr" src="./img/cyr.jpg" alt="crown your rights" />
                    <p> Crown Your Rights is about being accountable for the <i>Crown</i> you wear and making sure it Never falls.
                    </p>
                    
                </section>
            </header>
            <section className="content-row">
                <div>
                    <img src="./img/laugh.jpg" alt="laughter" />
                </div>
                <div>
                    <h2>LAUGHTER</h2>
                    <p> Being able to look at ourselves and understand that not everything is serious is a trait that has to be taught early. Briana understands that you're never fully dressed without a smile and she holds that close to her heart.
                    </p>
                    <p> Through laughter, you can always find your <i>Crown</i>.
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/confidence2.jpg" alt="confidence" />
                </div>
                <div>
                    <h2>CONFIDENCE</h2>
                    <p> To be confident, it takes 3 simple elements: 
                        (1) Being able to stay on course even when others feel it's incorrect. 
                        (2) Knowing in your heart and mind you're doing the right thing. (3) Knowing greatness is within you.
                    </p>
                    <p> "Never G-I-V-E-U-P and keep your H-E-A-D-U-P" - <i>Fabulous</i> Jaheim
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/freedom2.jpg" alt="freedom" />
                </div>
                <div>
                    <h2>FREEDOM</h2>
                    <p> To truly be free means that you've successfully beat worry in every aspect. Although life can be rough and your route to freedom can be difficult to find. Crown Your Rights will make it a proirity to make sure you are free.
                    </p>
                    <p> In feeling free, one is better prepared to face the world "on a full heart and stomach".
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/belonging2.jpg" alt="belonging" />
                </div>
                <div>
                    <h2>BELONGING</h2>
                    <p> In this crazy world, there are many people with a plethora of different attidudes and approaches to life. In all the madness, it feel like weights released from you when you have a place of belonging no matter who you are.
                    </p>
                    <p> When you have a place that you feel the most yourself is when you know. </p>
                </div>
            </section>
            <a 
                className="contact-link"
                href="https://crownyourrights.com/contact"
                target="contact.js"
                rel="noopener noreferrer"
            >
                Contact Me
            </a>
                    <h1><b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i></h1>
        </div>
    )
}

export default Home;