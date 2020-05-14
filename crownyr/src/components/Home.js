import React from "react";
import './home.scss';

const Home = () => {
    return (
        <div className="container">
            <h1>BeNice</h1>
            <header>
                <img src='./img/crown.jpg' alt="logo for cyr" />
                <section className="about">
                    <h2>About Crown Your Rights</h2>
                    <p> Crown Your Rights is about being accountable for the "crown" you wear and making sure it Never falls
                    </p>
                </section>
            </header>
            <section className="content-row">
                <div>
                    <img src="./img/laugh.jpg" alt="laughter" />
                </div>
                <div>
                    <h2>Laughter</h2>
                    <p> Being able to look at ourselves and understand that not Everything is serious is a trait that has to be taught early. Briana understands that you're never fully dressed without a smile and she holds that close to her heart.
                    </p>
                    <p> Through Laughter, you can always find your <i>Crown</i>.
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/confidence.jpg" alt="confidence" />
                </div>
                <div>
                    <h2>Confidence</h2>
                    <p> To be confident, it takes 2 simple elements: (1) Being able to stay on course even when others feel its incorrect. (2) Knowing in your Heart and Mind you're doing the right thing.
                    </p>
                    <p> "Never G-I-V-E-U-P and keep your H-E-A-D-U-P" - <i>Fabulous</i> Jaheim
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/freedom.jpg" alt="freedom" />
                </div>
                <div>
                    <h2>Freedom</h2>
                    <p> To truly be Free means that youve successfully beat Worry in every aspect. Although life can be rough and never show you a route to Freedom, Crown Your Rights will make it a proirity to make sure you feel Free.
                    </p>
                    <p> In feeling Free, one is better prepared to face the world "on a full stomach"
                    </p>
                </div>
            </section>
            <section className="content-row">
                <div>
                    <img src="./img/belonging.jpg" alt="belonging" />
                </div>
                <div>
                    <h2>Belonging</h2>
                    <p> In this crazy world, there are many people with a plethora of different attidudes and approaches to life. In all the madness, it feel like weights released from you when you have a place of Belonging no matter how you are.
                    </p>
                    <p> When you have a place that you feel the most yourself is when you know </p>
                </div>
            </section>
                    <h1><b>C</b><i>rown</i> <b>Y</b><i>our</i> <b>R</b><i>ights</i></h1>
        </div>
    )
}

export default Home;