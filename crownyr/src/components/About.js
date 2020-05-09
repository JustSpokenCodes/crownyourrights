import React from 'react';
import './about.scss';

const About = () => {
    const team = [
        {
            name: 'Briana E.L.H. Stevens',
            profile: '#',
            img: './img/maleficentStitch.jpg',
            role: 'President/ CEO',
        }
    ];

    return (
        <div className="page-wrap">
            <section className='card'>
                <h1 className='card-title'> So You Want To Know Who I Am</h1>
                <hr />
                <p>
                    Briana Stevens is one that cannot be held within one word. Dressed with a Bachelors of the Arts degree from the illustrious HBCU Howard University and a Masters of Education degree from the fantastic National University. With a way of bringing passion and compassion into everything she puts her heart into, you can be Sure Briana is the Real Deal.
                </p>
            </section>
            <section className='card'>
                <h1 className='card-title'> The Women </h1>
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