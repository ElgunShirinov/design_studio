// import React from 'react';
import testimonialCSS from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import signature from '../../assets/signature-2.png';
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className={`${testimonialCSS.Testimonials_Wrapper} section`} id='testimonials'>
        <div className={testimonialCSS.Testimonials_image}></div>
        <div className={testimonialCSS.Testimonials_content}>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000
                }}
                modules={[Autoplay]}
                speed={1500}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonials_content_text}>
                        <div className={testimonialCSS.ratings}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-line'></i>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero a doloribus animi tempora autem, voluptatem asperiores id maxime, dignissimos enim sunt earum perspiciatis blanditiis! Nihil laboriosam nobis rerum tenetur.</p>
                        <div className={testimonialCSS.profile}>
                            <h2>Nishan Rocks</h2>
                            <img src={signature} alt="signature" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonials_content_text}>
                        <div className={testimonialCSS.ratings}>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-fill'></i>
                            <i className='ri-star-line'></i>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero a doloribus animi tempora autem, voluptatem asperiores id maxime, dignissimos enim sunt earum perspiciatis blanditiis! Nihil laboriosam nobis rerum tenetur.</p>
                        <div className={testimonialCSS.profile}>
                            <h2>Banner Bruse</h2>
                            <img src={signature} alt="signature" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials