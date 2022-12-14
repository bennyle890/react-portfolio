import React from 'react';
import ProfilePic from '../../assets/images/BLe_Headshot.jpg';

function About() {

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
        <section className='about-me reveal-element' id='about-me'>
            <div className='container'>
                <h2 className='headings'>About Me</h2>
                <div className='row'>
                    <h5>Hi! You can call me Benny. I am a coding student at UNC Charlotte and an aspiring Developer based in North Carolina </h5>
                        <p>I currently work as a night shift Emergency Department Technician at a Level 1 Trauma center. I graduated in 2020 with a Bachelor's of Science in Exercise Science with a minor in Biology. As I continued my journey through healthcare, I discovered that I wanted to express my creative and logical side outside of patient care. Utilizing my creativity, I am able to design to my heart's desire and my logical to code. As I am inexperienced, I believe that my lack of experience allows me to learn and be open to the opportunities that arise. </p>
                        <p>I enjoy traveling and admiring the beautiful architecture and scenery that different venues of the world have to offer. </p>
                        <p>Here are a few technologies I've worked with recently while learning:</p>
                        <div className='bullet-l'>
                            <ul>
                                <li>Javascript (ES6+)</li>
                                <li>Node.js</li>
                                <li>MySql</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <div className='bullet-r'>
                            <ul>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                                <li>React</li>
                            </ul>
                        </div>
                </div>
                <div className='profilepic'>
                    <div className='wrapper'>
                        <div className='backdrop'>
                            <div></div>
                        </div>
                        <img src={ProfilePic} className='hero-img' alt='Profile Pic'></img>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About