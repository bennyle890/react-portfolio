import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Prowork from './components/ProWork';
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
            </main>
        </div>
    );
}

export default App;