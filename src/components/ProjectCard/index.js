import React from 'react';
import './projectcard.css';

function ProjectCard(props) {
    
    const { title, description, img, deployedLink, alt } = props;

    return (
        <article className='wrapper-a'>
            <div className='card'>
                <a target='_blank' rel='noreferrer' href={deployedLink} className='project-button'>
                    <img alt={alt} className='project-img' src={require(`../../assets/images/${img}.png`)}>
                    </img>
                </a>
                <div className='project-text'>
                    <h2 className='project-title-a'>{title}</h2>
                    <p className='project-desc'>{description}</p>
                </div>
            </div>
        </article>
    )
}
export default ProjectCard