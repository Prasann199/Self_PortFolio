import React from "react";
import "./Hero.css";
import profile from "../../assets/logo.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Resume from "../../assets/Prasann Malanaik Resume-2pages.pdg";


export default function Hero(){
    return (
        <div id="home" className="hero">
            <img className="profile-logo" src={profile} alt="" />
            <h1><span>I,m Prasann Malanaik,</span> FullStack Web Developer based in India</h1>
            <p>I am a FullStack Developer from Karnatak, India with expertise in Java, Spring, and Hibernate, proficient in HTML, CSS, JavaScript, and SQL.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1OUckjRZPa6sDY345m_MskdK04Bok36m2/view?usp=sharing" target="_blank">My Resume</a> </div>
            </div>
        </div>
    )
}