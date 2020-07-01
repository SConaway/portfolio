import React from 'react';

import resumeData from './../../resumeData.json';

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={require('./../../assets/images/' +
                            resumeData.main.image)}
                        alt="Tim Baker Profile Pic"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>
                        Use this bio section as your way of describing yourself
                        and saying what you do, what technologies you like to
                        use or feel most comfortable with, describing your
                        personality, or whatever else you feel like throwing in.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
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
                        <div className="columns download">
                            <p>
                                <a
                                    href={resumeData.main.resumeDownload}
                                    className="button"
                                >
                                    <i className="fa fa-download"></i>
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
