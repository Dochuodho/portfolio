import React from 'react';
import './intro.css';
import bg from '../../assets/mypic.png';
import { Link } from 'react-scroll';
import btnImg  from'../../assets/brief.png';

function intro() {
  return (
   <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Derrick</span><br />Website Designer</span>
            <p className="introPara">I am a passionate Full-Stack developer with experience in creating visually appealing websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" /> Hire Me </button></Link>

    
        </div>
        <img src={bg} alt="profile" className="bg" />

   </section>
   

  )
}

export default intro;
 