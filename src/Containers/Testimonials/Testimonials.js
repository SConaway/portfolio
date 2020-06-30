import React from 'react';

const Testimonials = ({data}) => {
    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                        <h1>
                            <span>Client Testimonials</span>
                        </h1>
                    </div>

                    <div className="ten columns flex-container">
                        <ul className="slides">
                            {data.testimonials.map((item) => (
                                <li key={item.user}>
                                    <blockquote>
                                        <p>{item.text}</p>
                                        <cite>{item.user}</cite>
                                    </blockquote>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
