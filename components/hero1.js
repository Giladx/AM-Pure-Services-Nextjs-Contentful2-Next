import React from 'react'

import PropTypes from 'prop-types'

const Hero1 = (props) => {
  return (
    <>
      <div className="hero1-hero section-container">
        <div className="hero1-banner">
          <div className="hero1-left">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="true"
              className="hero1-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide swiper-slide"
                >
                  <h1 className="hero1-text">
                    WE BELIEVE IN ONE WAY: INTEGRITY
                  </h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide1 swiper-slide"
                >
                  <h1 className="hero1-text1">WE CARE FOR PEOPLE HEALTH</h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide2 swiper-slide"
                >
                  <h1 className="hero1-heading">WE BELIEVE IN SAVING ENERGY</h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide3 swiper-slide"
                >
                  <h1 className="hero1-heading1">
                    WE WILL GIVE YOU BEST PERFORMANCE
                  </h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide4 swiper-slide"
                >
                  <h1 className="hero1-heading2">
                    PURE CLEAN AIR DUCT FOR HEALTHY LIFE
                  </h1>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="hero1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet1 swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet2 swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet3 swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet4 swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="hero1-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="hero1-slider-button-next swiper-button-next"
              ></div>
            </div>
          </div>
          <div className="hero1-right">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="hero1-slider1 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide5 swiper-slide"
                >
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="hero1-image"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide6 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide7 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="hero1-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
            </div>
          </div>
          <div className="hero1-container"></div>
        </div>
      </div>
      <style jsx>
        {`
          .hero1-hero {
            height: 950px;
            position: relative;
            padding-top: 0px;
            padding-bottom: 0px;
          }
          .hero1-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .hero1-left {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero1-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .hero1-slider-slide {
            display: flex;
            background-size: 100%;
          }
          .hero1-text {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
            text-align: center;
          }
          .hero1-slider-slide1 {
            display: flex;
            text-align: center;
            align-items: center;
          }
          .hero1-text1 {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
          }
          .hero1-slider-slide2 {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .hero1-heading {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .hero1-slider-slide3 {
            width: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .hero1-heading1 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .hero1-slider-slide4 {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .hero1-heading2 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .hero1-slider-pagination {
            display: block;
          }
          .hero1-slider-pagination-bullet {
            background: black;
          }
          .hero1-slider-pagination-bullet1 {
            background: #000000;
          }
          .hero1-slider-pagination-bullet2 {
            background: #000000;
          }
          .hero1-slider-pagination-bullet3 {
            background: #000000;
          }
          .hero1-slider-pagination-bullet4 {
            background: #000000;
          }
          .hero1-slider-button-prev {
            display: none;
          }
          .hero1-slider-button-next {
            display: none;
          }
          .hero1-right {
            width: 1266px;
            height: 100%;
            display: flex;
            z-index: 0;
            align-items: flex-end;
            flex-direction: column;
          }
          .hero1-slider1 {
            width: 100%;
            height: 950px;
            display: inline-block;
          }
          .hero1-slider-slide5 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-image {
            width: 100%;
            height: 955px;
            object-fit: cover;
          }
          .hero1-slider-slide6 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-slider-slide7 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-slider-pagination1 {
            display: block;
          }
          .hero1-container {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 950px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at right,
              rgba(189, 195, 199, 0) 45%,
              rgb(0, 93, 37) 55%
            );
          }
          @media (max-width: 1600px) {
            .hero1-text {
              width: 720px;
            }
            .hero1-text1 {
              width: 720px;
            }
            .hero1-heading {
              width: 720px;
            }
            .hero1-heading1 {
              width: 720px;
            }
            .hero1-heading2 {
              width: 720px;
            }
          }
          @media (max-width: 991px) {
            .hero1-text {
              font-size: 4.3em;
            }
            .hero1-text1 {
              font-size: 4.3em;
            }
            .hero1-heading {
              font-size: 4.3em;
            }
            .hero1-heading1 {
              font-size: 4.3em;
            }
            .hero1-heading2 {
              font-size: 4.3em;
            }
          }
          @media (max-width: 767px) {
            .hero1-text {
              font-size: 4em;
            }
            .hero1-text1 {
              font-size: 4em;
            }
            .hero1-heading {
              font-size: 4em;
            }
            .hero1-heading1 {
              font-size: 4em;
            }
            .hero1-heading2 {
              font-size: 4em;
            }
          }
          @media (max-width: 479px) {
            .hero1-text {
              width: 360px;
              font-size: 2.1em;
            }
            .hero1-text1 {
              width: 360px;
              font-size: 2.1em;
            }
            .hero1-heading {
              width: 360px;
              font-size: 2.1em;
            }
            .hero1-heading1 {
              width: 360px;
              font-size: 2.1em;
            }
            .hero1-heading2 {
              width: 360px;
              font-size: 2.1em;
            }
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  rootClassName8: '',
  rootClassName: '',
  rootClassName7: '',
  rootClassName6: '',
  imageAlt: 'image',
  rootClassName11: '',
  rootClassName9: '',
  rootClassName1: '',
  primary: 'MONTHLY SPECIALS',
  primary1: 'MONTHLY SPECIALS',
  rootClassName2: '',
  rootClassName14: '',
  rootClassName4: '',
  rootClassName3: '',
  rootClassName5: '',
  rootClassName10: '',
  imageSrc: '/png%20image%2011-1300w.webp',
  rootClassName12: '',
  rootClassName13: '',
}

Hero1.propTypes = {
  rootClassName8: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName7: PropTypes.string,
  rootClassName6: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName11: PropTypes.string,
  rootClassName9: PropTypes.string,
  rootClassName1: PropTypes.string,
  primary: PropTypes.string,
  primary1: PropTypes.string,
  rootClassName2: PropTypes.string,
  rootClassName14: PropTypes.string,
  rootClassName4: PropTypes.string,
  rootClassName3: PropTypes.string,
  rootClassName5: PropTypes.string,
  rootClassName10: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName12: PropTypes.string,
  rootClassName13: PropTypes.string,
}

export default Hero1
