import Head from 'next/head';

import Header from './../Containers/Header/Header';
import Footer from './../Containers/Footer/Footer';
import About from './../Containers/About/About';
import Resume from './../Containers/Resume/Resume';
import Portfolio from './../Containers/Portfolio/Portfolio';
import Contact from './../Containers/Contact/Contact';
// import Testimonials from './../Containers/Testimonials/Testimonials';

export default function Home() {
    return (
        <>
            <div>
                <Head>
                    <title>Steven Conaway</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Header />
                <About />
                <Resume />
                <Portfolio />
                {/* <Testimonials /> */}
                <Contact />
                <Footer />
            </div>
            <script
                src='https://code.jquery.com/jquery-3.6.0.min.js'
                integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
                crossOrigin='anonymous'
                defer
            ></script>

            <script
                src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js'
                integrity='sha256-w49DIDk8itgSjjuoof5lTxYKwcjWJ7Z2sRW3nU1StNA='
                crossOrigin='anonymous'
                defer
            ></script>

            <script src='/init.js' defer></script>
        </>
    );
}
