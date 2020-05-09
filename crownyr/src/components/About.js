import React from 'react';
import './about.scss';

const About = () => {
    const team = [
        {
            name: 'Briana E.L.H. Stevens',
            profile: '#'
            img: './img/maleficentStitch.jpg',
            role: 'President/ CEO'
        }
    ];

    return (
        <div className="page-wrap">
            <section className='card'>
                <h1 className='card-title'> So You Want To Know Who I Am</h1>
            </section>
        </div>
    )
}