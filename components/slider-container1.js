import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SliderContainer1 = (props) => {
  return (
    <>
      <div className={`slider-container1-div ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="true"
          className={`slider-container1-slider ${props.rootClassName} `}
        >
          <div data-thq="slider-wrapper" className={` ${props.rootClassName} `}>
            <div
              data-thq="slider-slide"
              className={`slider-container1-slider-slide1 ${props.rootClassName} `}
            >
              <h1 className="slider-container1-text1">
                WE BELIEVE IN ONE WAY: INTEGRITY
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className={`slider-container1-slider-slide2 ${props.rootClassName} `}
            >
              <h1 className="slider-container1-text2">
                WE CARE FOR PEOPLE HEALTH
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className={`slider-container1-slider-slide3 ${props.rootClassName} `}
            >
              <h1 className="slider-container1-heading1">
                WE BELIEVE IN SAVING ENERGY
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className={`slider-container1-slider-slide4 ${props.rootClassName} `}
            >
              <h1 className="slider-container1-heading2">
                WE WILL GIVE YOU BEST PERFORMANCE
              </h1>
            </div>
            <div
              data-thq="slider-slide"
              className={`slider-container1-slider-slide5 ${props.rootClassName} `}
            >
              <h1 className="slider-container1-heading3">
                PURE CLEAN AIR DUCT FOR HEALTHY LIFE
              </h1>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className={`slider-container1-slider-pagination ${props.rootClassName} `}
          >
            <div
              data-thq="slider-pagination-bullet"
              className={`slider-container1-slider-pagination-bullet1 ${props.rootClassName} `}
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className={`slider-container1-slider-pagination-bullet2 ${props.rootClassName} `}
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className={`slider-container1-slider-pagination-bullet3 ${props.rootClassName} `}
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className={`slider-container1-slider-pagination-bullet4 ${props.rootClassName} `}
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className={`slider-container1-slider-pagination-bullet5 ${props.rootClassName} `}
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className={`slider-container1-slider-button-prev ${props.rootClassName} `}
          ></div>
          <div
            data-thq="slider-button-next"
            className={`slider-container1-slider-button-next ${props.rootClassName} `}
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .slider-container1-div {
            width: 720px;
          }
          .slider-container1-slider {
            width: 100%;
            height: 500px;
            display: inline-block;
          }
          .slider-container1-slider-slide1 {
            display: flex;
            background-size: 100%;
          }
          .slider-container1-text1 {
            color: #ffffff;
            width: auto;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            align-self: center;
            text-align: center;
          }
          .slider-container1-slider-slide2 {
            display: flex;
            text-align: center;
          }
          .slider-container1-text2 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container1-slider-slide3 {
            display: flex;
            text-align: center;
          }
          .slider-container1-heading1 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .slider-container1-slider-slide4 {
            display: flex;
            text-align: center;
          }
          .slider-container1-heading2 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container1-slider-slide5 {
            display: flex;
            text-align: center;
          }
          .slider-container1-heading3 {
            color: #ffffff;
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .slider-container1-slider-pagination {
            display: block;
          }
          .slider-container1-slider-pagination-bullet1 {
            background: black;
          }
          .slider-container1-slider-pagination-bullet2 {
            background: #000000;
          }
          .slider-container1-slider-pagination-bullet3 {
            background: #000000;
          }
          .slider-container1-slider-pagination-bullet4 {
            background: #000000;
          }
          .slider-container1-slider-pagination-bullet5 {
            background: #000000;
          }
          .slider-container1-slider-button-prev {
            display: none;
          }
          .slider-container1-slider-button-next {
            display: none;
          }
          @media (max-width: 1600px) {
            .slider-container1-text1 {
              width: 720px;
            }
            .slider-container1-text2 {
              width: 720px;
            }
            .slider-container1-heading1 {
              width: 720px;
            }
            .slider-container1-heading2 {
              width: 720px;
            }
            .slider-container1-heading3 {
              width: 720px;
            }
          }
          @media (max-width: 991px) {
            .slider-container1-text1 {
              font-size: 4.3em;
            }
            .slider-container1-text2 {
              font-size: 4.3em;
            }
            .slider-container1-heading1 {
              font-size: 4.3em;
            }
            .slider-container1-heading2 {
              font-size: 4.3em;
            }
            .slider-container1-heading3 {
              font-size: 4.3em;
            }
          }
          @media (max-width: 767px) {
            .slider-container1-text1 {
              font-size: 4em;
            }
            .slider-container1-text2 {
              font-size: 4em;
            }
            .slider-container1-heading1 {
              font-size: 4em;
            }
            .slider-container1-heading2 {
              font-size: 4em;
            }
            .slider-container1-heading3 {
              font-size: 4em;
            }
          }
          @media (max-width: 479px) {
            .slider-container1-div {
              width: auto;
              justify-content: center;
            }
            .slider-container1-text1 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container1-text2 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container1-heading1 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container1-heading2 {
              width: 360px;
              font-size: 2.1em;
            }
            .slider-container1-heading3 {
              width: 360px;
              font-size: 2.1em;
            }
          }
        `}
      </style>
    </>
  )
}

SliderContainer1.defaultProps = {
  rootClassName: '',
}

SliderContainer1.propTypes = {
  rootClassName: PropTypes.string,
}

export default SliderContainer1
