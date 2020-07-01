import React from 'react';

import resumeData from './../../resumeData.json';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className='text-container'>
                <div className='row'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Client Testimonials</span>
                        </h1>
                    </div>

                    <div className='ten columns flex-container'>
                        <ul className='slides'>
                            {resumeData.testimonials.testimonials.map(
                                (item) => (
                                    <li key={item.user}>
                                        <blockquote>
                                            <p>{item.text}</p>
                                            <cite>{item.user}</cite>
                                        </blockquote>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
