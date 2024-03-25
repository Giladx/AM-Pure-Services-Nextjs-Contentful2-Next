import React from 'react'

import PropTypes from 'prop-types'

const SliderContainer11 = (props) => {
  return (
    <>
      <div className="slider-container11-div">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="true"
          className="slider-container11-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="slider-container11-slider-slide swiper-slide"
            >
              <h1 className="slider-container11-text">
                WE BELIEVE IN ONE WAY: INTEGRITY
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className="slider-container11-slider-slide1 swiper-slide"
            >
              <h1 className="slider-container11-text1">
                WE CARE FOR PEOPLE HEALTH
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className="slider-container11-slider-slide2 swiper-slide"
            >
              <h1 className="slider-container11-heading">
                WE BELIEVE IN SAVING ENERGY
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className="slider-container11-slider-slide3 swiper-slide"
            >
              <h1 className="slider-container11-heading1">
                WE WILL GIVE YOU BEST PERFORMANCE
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className="slider-container11-slider-slide4 swiper-slide"
            >
              <h1 className="slider-container11-heading2">
                PURE CLEAN AIR DUCT FOR HEALTHY LIFE
              </h1>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="slider-container11-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="slider-container11-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="slider-container11-slider-pagination-bullet1 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="slider-container11-slider-pagination-bullet2 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="slider-container11-slider-pagination-bullet3 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="slider-container11-slider-pagination-bullet4 swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="slider-container11-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="slider-container11-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .slider-container11-div {
            width: 720px;
          }
          .slider-container11-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .slider-container11-slider-slide {
            display: flex;
            background-size: 100%;
          }
          .slider-container11-text {
            color: #ffffff;
            width: auto;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
            text-align: center;
          }
          .slider-container11-slider-slide1 {
            display: flex;
            text-align: center;
          }
          .slider-container11-text1 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container11-slider-slide2 {
            display: flex;
            text-align: center;
          }
          .slider-container11-heading {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .slider-container11-slider-slide3 {
            display: flex;
            text-align: center;
          }
          .slider-container11-heading1 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container11-slider-slide4 {
            display: flex;
            text-align: center;
          }
          .slider-container11-heading2 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container11-slider-pagination {
            display: block;
          }
          .slider-container11-slider-pagination-bullet {
            background: black;
          }
          .slider-container11-slider-pagination-bullet1 {
            background: #000000;
          }
          .slider-container11-slider-pagination-bullet2 {
            background: #000000;
          }
          .slider-container11-slider-pagination-bullet3 {
            background: #000000;
          }
          .slider-container11-slider-pagination-bullet4 {
            background: #000000;
          }
          .slider-container11-slider-button-prev {
            display: none;
          }
          .slider-container11-slider-button-next {
            display: none;
          }
          @media (max-width: 1600px) {
            .slider-container11-text {
              width: 720px;
            }
            .slider-container11-text1 {
              width: 720px;
            }
            .slider-container11-heading {
              width: 720px;
            }
            .slider-container11-heading1 {
              width: 720px;
            }
            .slider-container11-heading2 {
              width: 720px;
            }
          }
          @media (max-width: 991px) {
            .slider-container11-text {
              font-size: 4.3em;
            }
            .slider-container11-text1 {
              font-size: 4.3em;
            }
            .slider-container11-heading {
              font-size: 4.3em;
            }
            .slider-container11-heading1 {
              font-size: 4.3em;
            }
            .slider-container11-heading2 {
              font-size: 4.3em;
            }
          }
          @media (max-width: 767px) {
            .slider-container11-text {
              font-size: 4em;
            }
            .slider-container11-text1 {
              font-size: 4em;
            }
            .slider-container11-heading {
              font-size: 4em;
            }
            .slider-container11-heading1 {
              font-size: 4em;
            }
            .slider-container11-heading2 {
              font-size: 4em;
            }
          }
          @media (max-width: 479px) {
            .slider-container11-div {
              width: auto;
              justify-content: center;
            }
            .slider-container11-text {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container11-text1 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container11-heading {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container11-heading1 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container11-heading2 {
              width: 360px;
              font-size: 2.1em;
            }
          }
        `}
      </style>
    </>
  )
}

SliderContainer11.defaultProps = {
  rootClassName: '',
}

SliderContainer11.propTypes = {
  rootClassName: PropTypes.string,
}

export default SliderContainer11
