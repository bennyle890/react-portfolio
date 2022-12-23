import React from 'react';
import MagicTraveler from '../../assets/images/MagTrav-Homepage.png';
import QCFoodies from '../../assets/images/QCFoodiesHomepage.png';
import TextEditor from '../../assets/images/JATE-img.png';
import Shop from '../../assets/images/shop(1).png';


function Prowork () {

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

    return(
    <section className='reveal-element' id="professional-work">
    <h2 class="headings">Professional Work</h2>
      <ul class="featured-projects">
        {/* Project 1  */}
        <li class="featured-project-styled reveal-element">
          <div class="project-content">
            <div>
              <p class="project-overline">Featured Project</p>
              <h3 class="project-title"><a href="https://qc-foodies.herokuapp.com/" target="blank">QC Foodies </a></h3>
              <div class="project-description">
                <p>An online blog about food found in Charlotte, North Carolina. Utilizing <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, <a href="https://www.npmjs.com/" target="_blank">npm</a>, <a href="https://www.javascript.com/" target="_blank">JavaScript</a>, and more. </p>
                <ul class="project-tech-list">
                  <li>VS Code</li>
                  <li>Bulma</li>
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>Heroku</li>
                </ul>
              </div>
              <div class="project-links">
                {/* <!-- Will Add Later --> */}
              </div>
            </div>
          </div>
          <div class="project-image">
            <a href="https://qc-foodies.herokuapp.com/" target="_blank">
              <div class="image-wrapper">
                <img src={QCFoodies} class="computer-img" alt="QC Foodies" />
              </div>
            </a>
          </div>
        </li>
        {/*  Project 2 */}
        <li class="featured-project-styled reveal-element">
          <div class="project-content">
            <div>
              <p class="project-overline">Featured Project</p>
              <h3 class="project-title"><a href="https://plovato97.github.io/Magic-trav/" target="blank">Magic Traveler</a></h3>
              <div class="project-description">
                <p>An event search engine that randomizes events based on location. Utilizing <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, <a href="https://serpapi.com/google-events-api" target="_blank">Google Events Api</a>, <a href="https://www.javascript.com/" target="_blank">JavaScript</a>, and more. </p>
                <ul class="project-tech-list">
                  <li>VS Code</li>
                  <li>Cirrus</li>
                  <li>Express</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div class="project-links">
                {/* <!-- Will Add Later --> */}
              </div>
            </div>
          </div>
          <div class="project-image">
            <a href="https://plovato97.github.io/Magic-trav/" target="_blank">
              <div class="image-wrapper">
                <img src={MagicTraveler} class="computer-img" alt="Magic Traveler" />
              </div>
            </a>
          </div>
        </li>
        {/* Project 3  */}
        <li class="featured-project-styled reveal-element">
          <div class="project-content">
            <div>
              <p class="project-overline">Featured Project</p>
              <h3 class="project-title"><a href="https://shop-n-it.herokuapp.com/" target="blank">Shop In It</a></h3>
              <div class="project-description">
                <p>A MERN E-Commerce Store utilizing <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> </p>
                <ul class="project-tech-list">
                  <li>VS Code</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div class="project-links">
                {/* <!-- Will Add Later --> */}
              </div>
            </div>
          </div>
          <div class="project-image">
            <a href="https://shop-n-it.herokuapp.com/" target="_blank">
              <div class="image-wrapper">
            <img src={Shop} class="computer-img" alt="Construction pic" />
              </div>
            </a>
          </div>
        </li>
      </ul>
      
    </section>
    )
};

export default Prowork