// import React from 'react';
import projectCSS from "./../Projects/Project.module.css";
import projectImg1 from './../../assets/Project.jpg';
import projectImg2 from './../../assets/Project2.jpg';
import projectImg3 from './../../assets/Project3.jpg';
import projectImg4 from './../../assets/Project4.jpg';
import projectImg5 from './../../assets/Project5.jpg';
import projectImg6 from './../../assets/Project6.jpg';
import projectImg7 from './../../assets/Project7.jpg';
import projectImg8 from './../../assets/Project8.jpg';
import projectImg9 from './../../assets/Project9.jpg';
import projectImg10 from './../../assets/Project10.jpg';

const Project = () => {
  return (
    <div className={`${projectCSS.project_wrapper} section`} id="projects">
        <h2>HomeDown Projects</h2>
        <p className={projectCSS.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam aut dolor aperiam fugit? Deleniti placeat debitis magnam dolorum necessitatibus, alias obcaecati!</p>

        <div className={projectCSS.projectCards}>
            <div className={projectCSS.projectCard}>
                <img src={projectImg1} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Design Corner</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg2} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>COZY FORTESS</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg3} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Heaven Hotel</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg4} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg5} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg6} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg7} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg8} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg9} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
            <div className={projectCSS.projectCard}>
                <img src={projectImg10} alt="project-image" />

                <div className={projectCSS.Content}>
                    <h3>Stylish House</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque corporis sint fugit officia, repudiandae culpa?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project