import React from 'react'
import './skills.css';
import web from '../../assets/webdesign.jpg';


const skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">I am a skilled web designer proficient in creative design, responsive web design, HTML/CSS, UI/UX principles, graphic design, attention to detail, typography, color theory, portfolio presentation, personal branding, and SEO basics.</span>
      <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>I am a skilled web designer proficient in creative design, responsive web design, HTML/CSS, UI/UX principles, graphic design, attention to detail, typography, color theory, portfolio presentation, personal branding, and SEO basics.</p>

          </div>

          


      </div>
      <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>I am a skilled web designer proficient in creative design, responsive web design, HTML/CSS, UI/UX principles, graphic design, attention to detail, typography, color theory, portfolio presentation, personal branding, and SEO basics.</p>

          </div>

          


      </div>
      <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>I am a skilled web designer proficient in creative design, responsive web design, HTML/CSS, UI/UX principles, graphic design, attention to detail, typography, color theory, portfolio presentation, personal branding, and SEO basics.</p>

          </div>

          


      </div>
      <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>I am a skilled web designer proficient in creative design, responsive web design, HTML/CSS, UI/UX principles, graphic design, attention to detail, typography, color theory, portfolio presentation, personal branding, and SEO basics.</p>

          </div>

          


      </div>



    </section>
  )
}

export default skills
