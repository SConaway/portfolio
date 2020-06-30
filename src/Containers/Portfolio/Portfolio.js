import React from 'react';

const Portfolio = ({data}) => {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>

                    <div
                        id="portfolio-wrapper"
                        className="bgrid-quarters s-bgrid-thirds cf"
                    >
                        {data.projects.map((item) => (
                            <div
                                key={item.title}
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <a href={item.url} title={item.title}>
                                        <img
                                            alt={item.title}
                                            src={
                                                'images/portfolio/' + item.image
                                            }
                                        />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>{item.title}</h5>
                                                <p>{item.category}</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
