import React from 'react';
// import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import MagicTraveler from '../../assets/images/MagTrav-Homepage.png';
import QCFoodies from '../../assets/images/QCFoodiesHomepage.png';
import TextEditor from '../../assets/images/JATE-img.png';
import TrackVisibility from 'react-on-screen';


function Prowork () {

    const projects = [
        {
            title: 'Weather Whenever',
            description: 'Simple Weather App',
            img: 'WeatherWhenever',
            alt: 'Weather Whenever website',
            deployedlink: 'https://bennyle890.github.io/Weather-Whenever/'
        },
    ];

    return(
    <section id="projects">
    <h2 class="headings">Professional Work</h2>
      <ul class="featured-projects">
        {/* Project 1  */}
        <li class="featured-project-styled">
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
        <li class="featured-project-styled">
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
        <li class="featured-project-styled">
          <div class="project-content">
            <div>
              <p class="project-overline">Featured Project</p>
              <h3 class="project-title"><a href="https://text-editor-2.herokuapp.com/" target="blank">J.A.T.E.</a></h3>
              <div class="project-description">
                <p>A simple Text Editor Utilizing <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, to created a Progressive Web Application. </p>
                <ul class="project-tech-list">
                  <li>VS Code</li>
                  <li>Manifest</li>
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
            <a href="https://text-editor-2.herokuapp.com/" target="_blank">
              <div class="image-wrapper">
            <img src={TextEditor} class="computer-img" alt="Construction pic" />
              </div>
            </a>
          </div>
        </li>
      </ul>

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
      
    </section>
    )
};

export default Prowork