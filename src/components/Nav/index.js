import React from 'react';

function Nav() {

    return (
        <header>
            <div id='navbar' className='nav navbar-items'>
                <div className='logo'></div>
                <a href='#contact' className='reveal'>Contact</a>
                <a href='#professional-work' className='reveal'>Professional Work</a>
                <a href='#about-me' className='reveal'>About</a>
            </div>
        </header>
    )
}

export default Nav;