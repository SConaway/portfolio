import resumeData from './../../resumeData';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Image from 'next/image';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='row'>
                <div className='twelve columns collapsed'>
                    <h1>Check Out Some of My Works.</h1>

                    <div
                        id='portfolio-wrapper'
                        className='bgrid-quarters s-bgrid-thirds cf'
                    >
                        {resumeData.portfolio.projects.map((item) => (
                            <div
                                key={item.title}
                                className='columns portfolio-item'
                            >
                                <div className='item-wrap'>
                                    <a href={item.url} title={item.title}>
                                        <Image
                                            alt={item.title}
                                            src={
                                                item.image.local
                                                    ? `/${item.image.name}`
                                                    : item.image.uri
                                            }
                                            width={item.image.width}
                                            height={item.image.height}
                                            quantity={25}
                                            // loading='eager'
                                        />
                                        <div className='overlay'>
                                            <div className='portfolio-item-meta'>
                                                <h5>{item.title}</h5>
                                                <p>{item.category}</p>
                                            </div>
                                        </div>
                                        <div className='link-icon'>
                                            {/* <i className='fa fa-link'></i> */}
                                            <FontAwesomeIcon icon='link' />
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
