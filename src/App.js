import React from 'react';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import About from './Containers/About/About';
import Resume from './Containers/Resume/Resume';
import Contact from './Containers/Contact/Contact';
// import Testimonials from './Containers/Testimonials/Testimonials';
import Portfolio from './Containers/Portfolio/Portfolio';

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
