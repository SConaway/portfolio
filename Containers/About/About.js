import resumeData from '../../resumeData';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Image from 'next/image';

const About = () => {
    return (
        <section id='about'>
            <div className='row'>
                <div className='three columns'>
                    <Image
                        src={`/${resumeData.main.image.path}`}
                        className='profile-pic'
                        alt='Steven Conaway Profile Pic'
                        width={resumeData.main.image.width}
                        height={resumeData.main.image.height}
                        loading='eager'
                    />
                </div>
                <div className='nine columns main-col'>
                    <h2>About Me</h2>

                    <p>{resumeData.main.description}</p>
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
