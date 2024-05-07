import React from "react";
import "./Contact.css";
import Mail from "../../assets/mail-logo.svg"
import Call from "../../assets/call-logo.svg"
import Location from "../../assets/location-logo.svg"

export default function Contact(){
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7fac0122-e3b7-40c8-a2d9-9aca1387b084");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    return (
        <div  id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new project, so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={Mail} alt="" /><p>prasannmalanaik@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Call} alt="" /><p>+91 xxxxxxxxxx</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Location} alt="" /><p>Belagavi, Karnatak, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter your Email" name="email"/>
                    <label htmlFor="">Write your Message here</label>
                    <textarea name="message" cols="40" rows="10"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}