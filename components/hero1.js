import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

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
              className="hero1-slider1 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide1 swiper-slide"
                >
                  <h1 className="hero1-text1">
                    WE BELIEVE IN ONE WAY: INTEGRITY
                  </h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide2 swiper-slide"
                >
                  <h1 className="hero1-text2">WE CARE FOR PEOPLE HEALTH</h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide3 swiper-slide"
                >
                  <h1 className="hero1-heading1">
                    WE BELIEVE IN SAVING ENERGY
                  </h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide4 swiper-slide"
                >
                  <h1 className="hero1-heading2">
                    WE WILL GIVE YOU BEST PERFORMANCE
                  </h1>
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide5 swiper-slide"
                >
                  <h1 className="hero1-heading3">
                    PURE CLEAN AIR DUCT FOR HEALTHY LIFE
                  </h1>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="hero1-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet1 swiper-pagination-bullet swiper-pagination-bullet-active"
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
                <div
                  data-thq="slider-pagination-bullet"
                  className="hero1-slider-pagination-bullet5 swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="hero1-slider-button-prev1 swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="hero1-slider-button-next1 swiper-button-next"
              ></div>
            </div>
          </div>
          <div className="hero1-right">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="hero1-slider2 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide6 swiper-slide"
                >
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="hero1-image"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide7 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="hero1-slider-slide8 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="hero1-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
          .hero1-slider1 {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .hero1-slider-slide1 {
            display: flex;
            background-size: 100%;
          }
          .hero1-text1 {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
            text-align: center;
          }
          .hero1-slider-slide2 {
            display: flex;
            text-align: center;
            align-items: center;
          }
          .hero1-text2 {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
          }
          .hero1-slider-slide3 {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .hero1-heading1 {
            color: #ffffff;
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .hero1-slider-slide4 {
            width: 100%;
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
          .hero1-slider-slide5 {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .hero1-heading3 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .hero1-slider-pagination1 {
            display: block;
          }
          .hero1-slider-pagination-bullet1 {
            background: black;
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
          .hero1-slider-pagination-bullet5 {
            background: #000000;
          }
          .hero1-slider-button-prev1 {
            display: none;
          }
          .hero1-slider-button-next1 {
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
          .hero1-slider2 {
            width: 100%;
            height: 950px;
            display: inline-block;
          }
          .hero1-slider-slide6 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-image {
            width: 100%;
            height: 955px;
            object-fit: cover;
          }
          .hero1-slider-slide7 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-slider-slide8 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1300');
          }
          .hero1-slider-pagination2 {
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
            .hero1-text1 {
              width: 720px;
            }
            .hero1-text2 {
              width: 720px;
            }
            .hero1-heading1 {
              width: 720px;
            }
            .hero1-heading2 {
              width: 720px;
            }
            .hero1-heading3 {
              width: 720px;
            }
          }
          @media (max-width: 991px) {
            .hero1-text1 {
              font-size: 4.3em;
            }
            .hero1-text2 {
              font-size: 4.3em;
            }
            .hero1-heading1 {
              font-size: 4.3em;
            }
            .hero1-heading2 {
              font-size: 4.3em;
            }
            .hero1-heading3 {
              font-size: 4.3em;
            }
          }
          @media (max-width: 767px) {
            .hero1-text1 {
              font-size: 4em;
            }
            .hero1-text2 {
              font-size: 4em;
            }
            .hero1-heading1 {
              font-size: 4em;
            }
            .hero1-heading2 {
              font-size: 4em;
            }
            .hero1-heading3 {
              font-size: 4em;
            }
          }
          @media (max-width: 479px) {
            .hero1-text1 {
              width: 360px;
              font-size: 2.1em;
            }
            .hero1-text2 {
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
            .hero1-heading3 {
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
  rootClassName: '',
  imageAlt: 'image',
  imageSrc: '/png%20image%2011-1300w.webp',
}

Hero1.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Hero1
