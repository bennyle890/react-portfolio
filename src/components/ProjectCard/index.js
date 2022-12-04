import React from 'react';

const ProjectCard = ({ title, description, imgUrl }) => {

    return(
        <Col size={12} sm={6} md={4}>
            <div className='proj-img'>
                <img src={imgUrl} />
                <div className='proj-txt'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};