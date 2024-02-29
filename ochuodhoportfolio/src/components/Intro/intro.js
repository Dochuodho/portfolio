import React from 'react';
import './intro.css';
import bg from '../../assets/mypic.png';
import { Link } from 'react-scroll';
import btnImg  from'../../assets/brief.png';

function Intro() {
  return (
   <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Derrick Odhiambo</span><br />Website Designer</span>
            <p className="introPara">I am a passionate Full-Stack developer with experience in creating<br /> visually appealing websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me </button></Link>
            
        </div>
        <img src={bg} alt="profile" className="bg" />
        

   </section>
   

  );
}

export default Intro;
 