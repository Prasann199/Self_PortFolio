import React from "react";
import "./Mywork.css";
import mywork_data from "../../assets/Mywork_data";       


export default function Mywork(){
    return (
        <div id="work" className="myworks">
            <div className="myworks-title">
            <h1>My Latest Works</h1>
            </div>
            <div className="myworks-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
            </div>
            <div className="myworks-showmore"><p>Show More</p></div>
            
        </div>
    )
}