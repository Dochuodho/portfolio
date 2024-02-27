import React from 'react'
import './works.css';
import Illustration from '../../assets/Red Illustration Free Shipping Day Poster.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor vehicula felis, eu laoreet purus finibus in. Sed viverra ipsum ac purus consectetur. Fusce sit amet urna vel ipsum ultricies varius</span>
        <div className="worksImgs">
            <img src={Illustration} alt="illustration" className="worksImg" />
            <img src={Illustration} alt="illustration" className="worksImg" />
            <img src={Illustration} alt="illustration" className="worksImg" />
            <img src={Illustration} alt="illustration" className="worksImg" />
            
        </div>
        <button className="workBtn">See More</button>
    </section>
    
  )
}

export default Works
