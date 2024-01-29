import React from 'react'

import PropTypes from 'prop-types'

const Banner1 = (props) => {
  return (
    <>
      <div
        className={`banner1-banner section-container ${props.rootClassName} `}
      >
        <a href="tel:8885031722">
          <div className="banner1-max-width max-content-container">
            <span className="banner1-text">{props.text}</span>
            <h2 className="banner1-text1">
              <span className="banner1-text2">CALL US NOW</span>
              <br className="Heading2"></br>
              <span className="Heading2">(888) 503 1722</span>
            </h2>
            <button className="banner1-primary button-lg button-secondary-white button">
              {props.primary}
            </button>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .banner1-banner {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .banner1-max-width {
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .banner1-max-width:hover {
            cursor: pointer;
          }
          .banner1-text {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner1-text1 {
            color: var(--dl-color-scheme-white);
            width: 100%;
            font-size: 46px;
            text-align: center;
            font-family: Rubik;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
          }
          .banner1-text2 {
            font-weight: 900;
          }
          .banner1-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banner1-root-class-name {
            width: 100%;
            align-self: center;
          }

          .banner1-root-class-name2 {
            width: 100%;
          }
          .banner1-root-class-name3 {
            width: 100%;
          }
          .banner1-root-class-name4 {
            width: 100%;
          }

          .banner1-root-class-name6 {
            width: 100%;
          }
          .banner1-root-class-name7 {
            display: none;
          }
          .banner1-root-class-name8 {
            display: none;
          }
          .banner1-root-class-name9 {
            width: 100%;
          }
          .banner1-root-class-name10 {
            width: 100%;
          }
          .banner1-root-class-name11 {
            width: 100%;
          }
          .banner1-root-class-name12 {
            width: 100%;
          }
          .banner1-root-class-name13 {
            width: 100%;
          }
          .banner1-root-class-name14 {
            width: 100%;
          }
          .banner1-root-class-name15 {
            width: 100%;
          }
          .banner1-root-class-name16 {
            width: 100%;
          }
          .banner1-root-class-name17 {
            width: 100%;
          }
          .banner1-root-class-name18 {
            width: 100%;
            align-self: center;
          }
          .banner1-root-class-name19 {
            width: 100%;
          }
          @media (max-width: 1200px) {
            .banner1-banner {
              width: 100%;
            }
            .banner1-text1 {
              color: var(--dl-color-scheme-white);
              font-size: 46px;
              font-family: Rubik;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .banner1-text2 {
              font-weight: 900;
            }
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  text: 'what are you waiting for?',
  rootClassName: '',
  primary: 'Contact us',
}

Banner1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  primary: PropTypes.string,
}

export default Banner1
