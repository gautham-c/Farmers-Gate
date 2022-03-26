import React from 'react';
import i18n from "../Translations";

const Navbar = () => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };    

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">
                    <img className="navbar-logo"alt="Farmer's Gate" src={require('../assets/farm.png')} />     
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right py-auto">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><button className="btn btn-default btn-md" onClick={()=>changeLanguage("en")}>English</button></li>
                        <li><button className="btn btn-default btn-md" onClick={()=>changeLanguage("hi")}>हिन्दी</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;