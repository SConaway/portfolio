import resumeData from './../../resumeData';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <section id='contact'>
            <div className='row section-head'>
                <div className='two columns header-col'>
                    <h1>
                        <FontAwesomeIcon icon='envelope' />
                        <span>Get In Touch</span>
                    </h1>
                </div>

                <div className='ten columns'>
                    <p className='lead'>
                        Have a project for me? Think I'd be a good fit for your
                        team? I'd love to hear from you. Send me an email using
                        the form below.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='eight columns'>
                    {/* <form
                        action=''
                        method='post'
                        id='contactForm'
                        name='contactForm'
                    >
                        <fieldset>
                            <div>
                                <label htmlFor='contactName'>
                                    Name <span className='required'>*</span>
                                </label>
                                <input
                                    type='text'
                                    defaultValue=''
                                    size='35'
                                    id='contactName'
                                    name='contactName'
                                />
                            </div>

                            <div>
                                <label htmlFor='contactEmail'>
                                    Email <span className='required'>*</span>
                                </label>
                                <input
                                    type='text'
                                    defaultValue=''
                                    size='35'
                                    id='contactEmail'
                                    name='contactEmail'
                                />
                            </div>

                            <div>
                                <label htmlFor='contactSubject'>Subject</label>
                                <input
                                    type='text'
                                    defaultValue=''
                                    size='35'
                                    id='contactSubject'
                                    name='contactSubject'
                                />
                            </div>

                            <div>
                                <label htmlFor='contactMessage'>
                                    Message <span className='required'>*</span>
                                </label>
                                <textarea
                                    cols='50'
                                    rows='15'
                                    id='contactMessage'
                                    name='contactMessage'
                                ></textarea>
                            </div>

                            <div>
                                <button className='submit'>Submit</button>
                                <span id='image-loader'>
                                    <FontAwesomeIcon icon='refresh' />
                                    <span className='sr-only'>Loading...</span>
                                </span>
                            </div>
                        </fieldset>
                    </form> */}

                    <div id='message-warning'> Error</div>
                    <div id='message-success'>
                        <FontAwesomeIcon icon='check' />
                        Your message was sent, thank you!
                        <br />
                    </div>
                </div>

                <aside className='four columns footer-widgets'>
                    <div className='widget widget_contact'>
                        <h4>Contact Information</h4>
                        <h5>Phone</h5>
                        {resumeData.main.phone}
                        <h5>Email</h5>
                        {resumeData.main.email}
                        <h5>Snail Mail</h5>
                        <p className='address'>
                            {resumeData.main.name}
                            <br />
                            {resumeData.main.address.street} <br />
                            {resumeData.main.address.city},{' '}
                            {resumeData.main.address.state}{' '}
                            {resumeData.main.address.zip}
                            <br />
                            <span>{resumeData.main.phone}</span>
                        </p>
                    </div>

                    {/* <div className="widget widget_tweets">
                        <h4 className="widget-title">Latest Tweets</h4>
                        <ul id="twitter">
                            <li>
                                <span>
                                    This is Photoshop's version of Lorem Ipsum.
                                    Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b>
                                    <a href="#">2 Days Ago</a>
                                </b>
                            </li>
                            <li>
                                <span>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b>
                                    <a href="#">3 Days Ago</a>
                                </b>
                            </li>
                        </ul>
                    </div> */}
                </aside>
            </div>
        </section>
    );
};

export default Contact;
