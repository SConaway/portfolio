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
                                        {item.degree}{' '}
                                        <span className='bullet'>&bull;</span>
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
                        <span>Work Experience</span>
                    </h1>
                </div>

                <div className='nine columns main-col'>
                    {resumeData.resume.work.map((item) => (
                        <div key={item.title}>
                            <h3>{item.title}</h3>
                            <p className='info'>
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        textDecoration: 'underline black solid',
                                    }}
                                >
                                    {item.company}
                                </span>
                                {item.company && item.years && (
                                    <span className='bullet'>&bull;</span>
                                )}
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
                    <p>{resumeData.resume.skillMessage}</p>

                    <div className='bars'>
                        <ul className='skills'>
                            {resumeData.resume.skills
                                .sort(
                                    (a, b) =>
                                        b.level.split('%')[0] -
                                        a.level.split('%')[0],
                                )
                                .map((item) => (
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
