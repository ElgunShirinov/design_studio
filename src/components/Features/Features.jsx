// import React from 'react';
import featuresCSS from './Features.module.css';

const Features = () => {
  return (
    <div className={`${featuresCSS.Features_wrapper} section`} id='features'>
        <div className={featuresCSS.FeaturesCards}>
            <div className={featuresCSS.FeaturesCard}>
                <i className="ri-home-9-fill"></i>
                <div className={featuresCSS.content}>
                    <h3>Bright Projects</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores accusantium laudantium dolore ducimus cupiditate atque ab rerum? Eaque, voluptates. Et minima id deserunt. Nulla.</p>
                </div>
            </div>
            <div className={featuresCSS.FeaturesCard}>
                <i className="ri-home-wifi-fill"></i>
                <div className={featuresCSS.content}>
                    <h3>Comfortable Homes</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores accusantium laudantium dolore ducimus cupiditate atque ab rerum? Eaque, voluptates. Et minima id deserunt. Nulla.</p>
                </div>
            </div>
            <div className={featuresCSS.FeaturesCard}>
                <i className="ri-building-4-fill"></i>
                <div className={featuresCSS.content}>
                    <h3>Reliable Company</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores accusantium laudantium dolore ducimus cupiditate atque ab rerum? Eaque, voluptates. Et minima id deserunt. Nulla.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features