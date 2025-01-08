import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Banner = (props) => {
  return (
    <>
      <div
        className={`banner-banner section-container ${props.rootClassName} `}
      >
        <a href="tel:8885031722">
          <div className="banner-max-width max-content-container">
            <span className="banner-text1">{props.text}</span>
            <h2 className="banner-text2">
              <span className="banner-text3">CALL US NOW</span>
              <br className="Heading2"></br>
              <span className="Heading2">(888) 503 1722</span>
            </h2>
            <button className="banner-primary button-lg button-secondary-white button">
              {props.primary}
            </button>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .banner-banner {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .banner-max-width {
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .banner-max-width:hover {
            cursor: pointer;
          }
          .banner-text1 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner-text2 {
            color: var(--dl-color-scheme-white);
            width: 100%;
            font-size: 46px;
            text-align: center;
            font-family: Rubik;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
          }
          .banner-text3 {
            font-weight: 900;
          }
          .banner-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }

          .bannerroot-class-name2 {
            width: 100%;
          }
          .bannerroot-class-name3 {
            width: 100%;
          }
          .bannerroot-class-name4 {
            width: 100%;
          }

          .bannerroot-class-name6 {
            width: 100%;
          }
          .bannerroot-class-name7 {
            display: none;
          }
          .bannerroot-class-name8 {
            display: none;
          }
          .bannerroot-class-name9 {
            width: 100%;
          }
          .bannerroot-class-name10 {
            width: 100%;
          }
          .bannerroot-class-name11 {
            width: 100%;
          }
          .bannerroot-class-name12 {
            width: 100%;
          }
          .bannerroot-class-name13 {
            width: 100%;
          }
          .bannerroot-class-name14 {
            width: 100%;
          }
          .bannerroot-class-name15 {
            width: 100%;
          }
          .bannerroot-class-name16 {
            width: 100%;
          }
          .bannerroot-class-name17 {
            width: 100%;
          }
          .bannerroot-class-name18 {
            width: 100%;
            align-self: center;
          }
          .bannerroot-class-name19 {
            width: 100%;
          }
          .bannerroot-class-name20 {
            width: 100%;
          }
          .bannerroot-class-name21 {
            width: 100%;
          }
          .bannerroot-class-name22 {
            width: 100%;
          }
          .bannerroot-class-name23 {
            width: 100%;
          }
          .bannerroot-class-name24 {
            width: 100%;
            align-self: center;
          }
          @media (max-width: 1200px) {
            .banner-banner {
              width: 100%;
            }
            .banner-text2 {
              color: var(--dl-color-scheme-white);
              font-size: 46px;
              font-family: Rubik;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .banner-text3 {
              font-weight: 900;
            }
            .bannerroot-class-name18 {
              width: 100%;
            }
            .bannerroot-class-name24 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  rootClassName: '',
  text: 'what are you waiting for?',
  primary: 'Contact us',
}

Banner.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  primary: PropTypes.string,
}

export default Banner
