import React from 'react';

import resumeData from './../../resumeData.json';

const Resume = () => {
    return (
        <section id='resume'>
            <div className='row education'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className='nine columns main-col'>
                    <div className='row item'>
                        <div className='twelve columns'>
                            {resumeData.resume.education.map((item) => (
                                <div key={item.school}>
                                    <h3>{item.school}</h3>
                                    <p className='info'>
                                        {item.degree} <span>&bull;</span>
                                        <em className='date'>
                                            {item.graduated}
                                        </em>
                                    </p>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='row work'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className='nine columns main-col'>
                    {resumeData.resume.work.map((item) => (
                        <div key={item.company}>
                            <h3>{item.company}</h3>
                            <p className='info'>
                                {item.title}
                                <span>&bull;</span>{' '}
                                <em className='date'>{item.years}</em>
                            </p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='row skill'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className='nine columns main-col'>
                    <p>{resumeData.resume.skillmessage}</p>

                    <div className='bars'>
                        <ul className='skills'>
                            {resumeData.resume.skills.map((item) => (
                                <li key={item.name}>
                                    <span
                                        style={{width: item.level}}
                                        className={
                                            'bar-expand ' +
                                            item.name.toLowerCase()
                                        }
                                    ></span>
                                    <em>{item.name}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
