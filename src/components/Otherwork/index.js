import React from 'react';
import ProjectCard from '../ProjectCard';
import './otherwork.css';


function Otherwork() {

    const projects = [
        {
            title: 'Weather Whenever',
            description: 'Simple Weather App',
            img: 'WeatherWhenever',
            alt: 'Weather Whenever website',
            deployedLink: 'https://bennyle890.github.io/Weather-Whenever/'
        },
        {
            title: 'Notes for Thoughts',
            description: 'Note taking application',
            img: 'Notes',
            alt: 'Notes for thoughts webpage',
            deployedLink: 'https://notes-for-thoughts.herokuapp.com/'
        },
    ];

    // Javascript for Scroll Down Transition 
    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal-element');

        for(var i = 0; i < reveals.length; i++){
            
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    };

    return (
        <section className='reveal-element'>
            <h2 className="headings-a">Other Noteworthy Projects</h2>
            <section className="project" id="project">
                <div className='container-a'>
                    {projects.map((el, i) => (
                        <div key={i} className='row-a'>
                            <ProjectCard
                                title = {el.title}
                                description = {el.description}
                                img = {el.img}
                                alt = {el.alt}
                                deployedLink = {el.deployedLink}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Otherwork;