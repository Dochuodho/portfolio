import React from 'react'
import './contact.css';
import Client from '../../assets/Our Client.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/ig.png';
import X from '../../assets/X.png';


const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div className="clientImgs">
            <img src={Client} alt="client" className="clientImg" />
            <img src={Client} alt="client" className="clientImg" />
            <img src={Client} alt="client" className="clientImg" />
            <img src={Client} alt="client" className="clientImg" />
        </div>
            

        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDescription">Please fill out the form below to discuss any work opprtunities. </span>
          <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
              <img src={linkedin} alt="" className="link" />
              <img src={instagram} alt="" className="link" />
              <img src={youtube} alt="" className="link" />
              <img src={X} alt="" className="link" />
              
            </div>
          </form>

        </div>
    </section>
    
      
    
  )
}

export default Contact
