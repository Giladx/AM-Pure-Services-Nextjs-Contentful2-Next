import React from 'react'

import PropTypes from 'prop-types'

const Banner2 = (props) => {
  return (
    <>
      <div
        className={`banner2-banner section-container ${props.rootClassName} `}
      >
        <a href="tel:8885031722">
          <div className="banner2-max-width max-content-container">
            <span className="banner2-text">{props.text}</span>
            <h2 className="banner2-text1">
              <span className="banner2-text2">CALL US NOW</span>
              <br className="Heading2"></br>
              <span className="Heading2">(888) 503 1722</span>
            </h2>
            <button className="banner2-primary button-lg button-secondary-white button">
              {props.primary}
            </button>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .banner2-banner {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .banner2-max-width {
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .banner2-max-width:hover {
            cursor: pointer;
          }
          .banner2-text {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner2-text1 {
            color: var(--dl-color-scheme-white);
            width: 100%;
            font-size: 46px;
            text-align: center;
            font-family: Rubik;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
          }
          .banner2-text2 {
            font-weight: 900;
          }
          .banner2-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banner2-root-class-name {
            width: 100%;
            align-self: center;
          }

          .banner2-root-class-name2 {
            width: 100%;
          }
          .banner2-root-class-name3 {
            width: 100%;
          }
          .banner2-root-class-name4 {
            width: 100%;
          }

          .banner2-root-class-name6 {
            width: 100%;
          }
          .banner2-root-class-name7 {
            display: none;
          }
          .banner2-root-class-name8 {
            display: none;
          }
          .banner2-root-class-name9 {
            width: 100%;
          }
          .banner2-root-class-name10 {
            width: 100%;
          }
          .banner2-root-class-name11 {
            width: 100%;
          }
          .banner2-root-class-name12 {
            width: 100%;
          }
          .banner2-root-class-name13 {
            width: 100%;
          }
          .banner2-root-class-name14 {
            width: 100%;
          }
          .banner2-root-class-name15 {
            width: 100%;
          }
          .banner2-root-class-name16 {
            width: 100%;
          }
          .banner2-root-class-name17 {
            width: 100%;
          }
          .banner2-root-class-name19 {
            width: 100%;
          }
          @media (max-width: 1200px) {
            .banner2-banner {
              width: 100%;
            }
            .banner2-text1 {
              color: var(--dl-color-scheme-white);
              font-size: 46px;
              font-family: Rubik;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .banner2-text2 {
              font-weight: 900;
            }
          }
        `}
      </style>
    </>
  )
}

Banner2.defaultProps = {
  primary: 'Contact us',
  rootClassName: '',
  text: 'what are you waiting for?',
}

Banner2.propTypes = {
  primary: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Banner2
