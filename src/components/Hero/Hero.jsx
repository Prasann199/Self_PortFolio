import React from "react";
import "./Hero.css";
import profile from "../../assets/logo.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Hero(){
    return (
        <div id="home" className="hero">
            <img className="profile-logo" src={profile} alt="" />
            <h1><span>I,m Prasann Malanaik,</span> FullStack Web Developer based in India</h1>
            <p>I am a FullStack Developer from Karnatak, India with expertise in Java, Spring, and Hibernate, proficient in HTML, CSS, JavaScript, and SQL.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}