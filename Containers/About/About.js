import resumeData from './../../resumeData.json';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Image from 'next/image';

const About = () => {
    return (
        <section id='about'>
            <div className='row'>
                <div className='three columns'>
                    <Image
                        src={`/${resumeData.main.image}`}
                        className='profile-pic'
                        alt='Steven Conaway Profile Pic'
                        unsized
                    />
                </div>
                <div className='nine columns main-col'>
                    <h2>About Me</h2>

                    <p>
                        While the high school I have attended does not offer
                        classes in the ever-changing fields of technology, I
                        have found a way to integrate these fields into my
                        study: I have taken online courses in STEM fields
                        independently and am the founding president of my
                        school's VEX Robotics Club. Additionally, I have
                        significant STEM experience outside of my school. I
                        enjoy sharing my knowledge and experience with others in
                        my community. Most recently, I was the Recipient of the
                        Environmental Justice Angel Award at the East Los
                        Angeles Community Youth Center's annual Gala in November
                        2019.
                    </p>
                    <div className='row'>
                        <div className='columns contact-details'>
                            <h2>Contact Details</h2>
                            <p className='address'>
                                <span>{resumeData.main.name}</span>
                                <br />
                                <span>
                                    {resumeData.main.address.street}
                                    <br />
                                    {resumeData.main.address.city}{' '}
                                    {resumeData.main.address.state},{' '}
                                    {resumeData.main.address.zip}
                                </span>
                                <br />
                                <span>{resumeData.main.phone}</span>
                                <br />
                                <span>{resumeData.main.email}</span>
                            </p>
                        </div>
                        <div className='columns download'>
                            <p>
                                <a
                                    href={resumeData.main.resumeDownload}
                                    className='button'
                                >
                                    <FontAwesomeIcon icon='download' />
                                    Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
