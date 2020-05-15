import React from 'react';
import './about.scss';

const About = () => {
    const team = [
        {
            name: 'Briana E.L. Stevens',
            profile: '#',
            img: './img/briaCoverphoto.jpg',
            role: 'President/ CEO',
        }
    ];

    return (
        <div className="page-wrap">
            <section className='card'>
                <h1 className='card-title'>Who I Am</h1>
                <hr />
                <p>
                    Briana Stevens, a West Coast native with Southern hospitality. Born and raised in California attended the prestigious Howard University in Washington, D.C. for undergraduate obtaining a Bachelors of Arts in Radio-Television-Film (RTVF) with a focus in Film and minor in African American Studies. Continuing her love of learning and attending National University in La Jolla, California achieving a Master of Arts in Education with a focus on e-teaching & learning. To compliment her Master of Arts, she obtianed a Teaching English as a Foreign Language (TEFL) certificate.
                </p>
                <p>
                    Briana lives her life through the Zulu proverb, "I am a person through other people. My humanity is tied to yours." She also lives by the ideal of diversity of thought, the more opinions included make the idea even more magical than the original idea. Her passion is to assist in giving a voice to those who feel they lack a voice in their community. Through a multitude of projects, Briana tends to support the youth in showing them they are the future and they control anything and everything they choose to put their minds to.
                </p>
                <p>
                    Briana Supports and Welcomes anyone and everyone who would like to join in on her mission.
                </p>
            </section>
            <section className='card'>
                <h1 className='card-title'> The Woman </h1>
                <hr />
                <div className='team'>
                    {
                        team.map(bs => {
                            return <div key={bs.name}>
                                <img className='profile-avi' src={bs.img} alt='the women' />
                                <p className='text-bold'>
                                    <a href={bs.profile} target="_blank" rel="noopener noreferrer">
                                    {bs.name}
                                    </a>
                                    <p className='about-role'>{bs.role}</p>
                                </p>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default About;