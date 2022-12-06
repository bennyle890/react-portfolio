import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Prowork from './components/Prowork';
import Footer from './components/Footer';
import Otherwork from './components/Otherwork';
// import './App.css';

function App() {

    return( 
        <div>
            <Nav></Nav>
            <main>
                <Hero />
                <About></About>
                <Sidebar />
                <Prowork />
                <Otherwork />
            </main>
            <Footer />
        </div>
    );
}

export default App;