import React from 'react';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import About from './Containers/About/About';
import Resume from './Containers/Resume/Resume';
import Contact from './Containers/Contact/Contact';
// import Testimonials from './Containers/Testimonials/Testimonials';
import Portfolio from './Containers/Portfolio/Portfolio';

import resumeData from './resumeData.json';

const App = () => {
    return (
        <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            {/* <Testimonials data={resumeData.testimonials} /> */}
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </div>
    );
};

export default App;
