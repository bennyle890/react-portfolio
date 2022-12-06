import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Prowork from './components/Prowork';
import Footer from './components/Footer';
import Otherwork from './components/Otherwork';
import ContactForm from './components/Contact';

function App() {

    return( 
        <div>
            <Nav/>
            <main>
                    <Hero />
                    <About></About>
                    <Prowork />
                    <Otherwork />
                    <ContactForm></ContactForm>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;