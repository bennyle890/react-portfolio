import React from 'react';
import ProjectCard from '../ProjectCard';

function Otherwork() {

    const projects = [
        {
            title: 'Weather Whenever',
            description: 'Simple Weather App',
            img: 'WeatherWhenever',
            alt: 'Weather Whenever website',
            deployedlink: 'https://bennyle890.github.io/Weather-Whenever/'
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
        <div className='reveal-element'>
            <h2 class="headings">Other Noteworthy Projects</h2>
            <section className="project" id="project">
                <div className='container'>
                    {projects.map((el, i) => (
                        <div key={i}>
                            <ProjectCard
                                title = {el.title}
                                description = {el.description}
                                img = {el.img}
                                alt = {el.alt}
                                deployedlink = {el.deployedlink}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Otherwork;