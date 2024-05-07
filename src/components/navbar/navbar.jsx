import React, { useRef, useState } from "react";
// import logo from "../../assets/logo.png"
import "./navbar.css"
import Underline from "../../assets/underline1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu_btn from "../../assets/menu-icon.svg";
import Cross from "../../assets/cross-icon.svg"

const Navbar=()=>{

    const [menu,setMenu]=useState("about");

    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }
    return (
        <div className="navbar">
            <h2 className="logo1">PrasannMk</h2>
            <img className="menu-icon" onClick={openMenu} src={Menu_btn} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <img className="cross" onClick={closeMenu} src={Cross} alt="" />
                <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img className="underline" src={Underline} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img className="underline" src={Underline} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#service"><p onClick={()=>setMenu("service")}>Services</p></AnchorLink>{menu==="service"?<img className="underline" src={Underline} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img className="underline" src={Underline} alt="" />:<></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img className="underline" src={Underline} alt="" />:<></> }</li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar