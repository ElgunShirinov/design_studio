// import React from 'react';
import galleryCSS from './Gallery.module.css';
import galleryImg01 from './../../assets/Gallery01.jpg';
import galleryImg02 from './../../assets/Gallery02.jpg';
import galleryImg03 from './../../assets/Gallery03.jpg';
import galleryImg04 from './../../assets/Gallery04.jpg';
import galleryImg05 from './../../assets/Gallery05.jpg';
import galleryImg06 from './../../assets/Gallery06.jpg';
import galleryImg07 from './../../assets/Gallery07.jpg';
import galleryImg08 from './../../assets/Gallery08.jpg';
import galleryImg09 from './../../assets/Gallery09.jpg';
import galleryImg10 from './../../assets/Gallery10.jpg';
import galleryImg11 from './../../assets/Gallery11.jpg';
import galleryImg12 from './../../assets/Gallery12.jpg';

const Gallery = () => {
  return (
    <div className={`${galleryCSS.Gallery_wrapper} section`} id='gallery'>
        <h2>Gallery</h2>
        <p className={galleryCSS.paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad pariatur sunt et deleniti veritatis at totam eveniet ex reprehenderit voluptas.</p>

        <div className={galleryCSS.gallery_cards}>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg01} alt="gallery-image" />

                <div className={galleryCSS.content}>
                    <h3>Choose Your Dream</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg02} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>High Tech House</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg03} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Modern Style</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg04} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Housing Prices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg05} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Rent Abroad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg06} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg07} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg08} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg09} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg10} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg11} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg12} alt="gallery-image" />
                <div className={galleryCSS.content}>
                    <h3>Houses of The Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery