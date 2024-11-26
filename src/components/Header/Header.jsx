// import React from 'react'
import headerCSS from './Header.module.css';
import headerSlide1 from './../../assets/Slide01.jpg';
import headerSlide2 from './../../assets/Slide02.jpg';
import headerSlide3 from './../../assets/Slide03.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const Header = () => {
  return (
    <div className={headerCSS.header_wrapper} id='home'>
        <Swiper
          speed={1500}
          autoplay={{delay: 3000}}
          loop={true}
          modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className={headerCSS.HeaderSlide}>
                    <img src={headerSlide1} alt="header-slide" />

                    <div className={headerCSS.header_content}>
                        <small>Choice Around The World</small>
                        <h1>Modern Houses <br /> and Villas</h1>

                        <button><a href="#projects">All Projects <i className='ri-arrow-right-line'></i></a></button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={headerCSS.HeaderSlide}>
                    <img src={headerSlide2} alt="header-slide" />

                    <div className={headerCSS.header_content}>
                        <small>Choice Around The World</small>
                        <h1>Exterior <br /> Designes</h1>

                        <button><a href="#projects">All Projects <i className='ri-arrow-right-line'></i></a></button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={headerCSS.HeaderSlide}>
                    <img src={headerSlide3} alt="header-slide" />

                    <div className={headerCSS.header_content}>
                        <small>Choice Around The World</small>
                        <h1>Interior <br /> Designes</h1>

                        <button><a href="#projects">All Projects <i className='ri-arrow-right-line'></i></a></button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Header