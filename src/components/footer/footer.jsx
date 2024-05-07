import React from "react";
import "./footer.css";
import User_logo from "../../assets/user-icon.svg"

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>PrasannMk</h2>
                    <p>I am a fullStack developer from, Karnatak India </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={User_logo} alt="" />
                        <input type="emial" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    &copy; 2023 Prasann Malanaik, All rights Reserved
                </div>
                <div className="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}