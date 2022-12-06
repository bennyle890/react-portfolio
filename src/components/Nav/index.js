import React from 'react';

function Nav() {

    // Navbar scroll - Javascript
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <header>
            <div id='navbar' className='nav navbar-items'>
                <div className='logo'></div>
                <a href='BLe_Resume_C.pdf' download='Ble_Resume_C.pdf' className='reveal'>Resume</a>
                <a href='#contact' className='reveal'>Contact</a>
                <a href='#professional-work' className='reveal'>Professional Work</a>
                <a href='#about-me' className='reveal'>About</a>
            </div>
        </header>
    )
}

export default Nav;