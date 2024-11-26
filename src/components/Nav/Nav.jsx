// import React from 'react';
import { useRef } from "react";
import navCSS from "./Nav.module.css";
import logo from "../../assets/logo.webp";

const Nav = () => {
  const menu = useRef();
  // const nav = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.ShowMenu);
  };

  // window.addEventListener('scroll', function () {
  //     if (window.scrollY > 100) {
  //         nav.current.classList.add(navCSS.Sticky);
  //     }
  //     else {
  //         nav.current.classList.remove(navCSS.Sticky);
  //     }
  // })
  return (
    <div className={navCSS.nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="/" style={{ color: "white" }}>
          <img src={logo} alt="logo" className={navCSS.logo} />
        </a>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#home" className={navCSS.navbar_button}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={navCSS.navbar_button}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={navCSS.navbar_button}>
            Projects
          </a>
        </li>
        <li>
          <a href="#features" className={navCSS.navbar_button}>
            Features
          </a>
        </li>
        <li>
          <a href="#gallery" className={navCSS.navbar_button}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#testimonials" className={navCSS.navbar_button}>
            Testimonials
          </a>
        </li>
      </ul>

      <div className={navCSS.Nav_btns}>
        <div className={navCSS.social}>
          <i className="ri-facebook-line" style={{ color: "white" }}></i>
          <i className="ri-instagram-line" style={{ color: "white" }}></i>
          <i className="ri-twitter-x-line" style={{ color: "white" }}></i>
        </div>
        <i
          className="ri-menu-4-line"
          id={navCSS.bars}
          onClick={menuHandler}
        ></i>
      </div>
    </div>
  );
};

export default Nav;
