// import React from 'react';
import aboutCSS from "./About.module.css";
import aboutImg from './../../assets/about.png';

const About = () => {
  return (
    <div className={`${aboutCSS.About_wrapper} section`} id="about">
      <div className={aboutCSS.AboutCard}>
        <div className={aboutCSS.About_Card_content}>
          <h2>Our Mission is<br />Design & Develop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum maxime.</p>
          <button>About Us <i className="ri-arrow-right-up-line"></i></button>
        </div>
        <div className={aboutCSS.about_card_image}>
          <img src={aboutImg} alt="about-background" />
        </div>
      </div>
      <div className={aboutCSS.About_Content}>
        <div className={aboutCSS.about_card}>
          <h3>20k <span>Clients</span></h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga!</p>
        </div>
        <div className={aboutCSS.about_card}>
          <h3>564 <span>Projects</span></h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga!</p>
        </div>
        <div className={aboutCSS.about_card}>
          <h3>15k <span>Sales</span></h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga!</p>
        </div>
      </div>
    </div>
  )
}

export default About;