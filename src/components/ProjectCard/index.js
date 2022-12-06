import React from 'react';
import './projectcard.css';

function ProjectCard(props) {
    
    const { title, desciption, img, deployedLink, alt } = props;

    return (
        <article>
            <div className='project-button-w'>
                <a target='_blank' rel='noreferrer' href={deployedLink} className='project-button'>View Preview</a>
            </div>
            <img alt={alt} className='project-img' src={require(`../../assets/images/${img}.png`)}></img>
            <div className='project-text'>
                <h2>{title}</h2>
                <p>{desciption}</p>
            </div>
        </article>
    )
}
export default ProjectCard