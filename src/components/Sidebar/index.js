import React from 'react';
import GitHubImg from "../../assets/images/GitHubCat.png";
import InstagramImg from '../../assets/images/Instagram.png';
import LinkedInImg from '../../assets/images/linkedinimg.png';

function Sidebar() {

    return (
        <div class="sidebar">
            <ul>
                <a href='https://github.com/bennyle890' aria-label="GitHub" target="_blank" rel="github">
                    <img src={GitHubImg} class="ghcatimg" alt="githubCat"/> </a>
                <a href="https://instagram.com/le_benny" aria-label="Instagram" target="_blank" rel="instagram">
                    <img src={InstagramImg} class="instaimg" alt="instagramimg"/> </a>
                <a href="https://www.linkedin.com/in/benny-le/" aria-label="Linkedin" target="_blank" rel="linkedin">
                    <img src={LinkedInImg} class="linkedinimg" alt="linkedinimg"/></a>
            </ul>
                <p className='side-email'>benny.le890@gmail.com</p>
        </div>
    )
}

export default Sidebar;