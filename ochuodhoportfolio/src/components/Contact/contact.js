import React from 'react'
import './contact.css';
import Client from '../../assets/Our Client.png';


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

        </div>
    </section>
    
      
    
  )
}

export default Contact
