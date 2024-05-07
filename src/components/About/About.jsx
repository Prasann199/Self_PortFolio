import React from "react";
import "./About.css";
import profile from "../../assets/portfolio.jpg";

export default function About(){
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img className="profile" src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Skilled Fullstack Developer with expertise in Java, Spring, and Hibernate, proficient in HTML, CSS, JavaScript, and SQL. Proven adaptability in fast-paced environments, adept problem-solver, and effective communicator.</p>
                        <p> Completed a Fullstack web development course at Kodnest, Bengaluru, gaining hands-on experience in project development. Ready to contribute to your team's success with a strong understanding of frontend frameworks like React and dedication to staying updated on emerging technologies.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Javascript & ReactJs</p><hr style={{width:"55%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"70%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}