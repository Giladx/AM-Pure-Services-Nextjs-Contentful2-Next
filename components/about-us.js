import React from 'react'

import PropTypes from 'prop-types'

const AboutUs = (props) => {
  return (
    <>
      <div
        className={`about-us-about section-container ${props.rootClassName} `}
      >
        <div className="about-us-max-width max-content-container">
          <div className="about-us-text-container">
            <span className="about-us-text1">{props.text}</span>
            <h2 data-aos="fade-right" className="about-us-text2 Heading1">
              Peace of Mind, Guaranteed with Us.
            </h2>
            <span data-aos="fade-left" className="about-us-text3">
              {props.text1}
            </span>
            <div data-aos="fade-down" className="about-us-checklist">
              <div className="about-us-check-item1">
                <svg viewBox="0 0 1024 1024" className="about-us-icon10">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text4">{props.text2}</span>
              </div>
              <div className="about-us-check-item2">
                <svg viewBox="0 0 1024 1024" className="about-us-icon12">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text5">{props.text3}</span>
              </div>
              <div className="about-us-check-item3">
                <svg viewBox="0 0 1024 1024" className="about-us-icon14">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text6">{props.text4}</span>
              </div>
              <div className="about-us-check-item4">
                <svg viewBox="0 0 1024 1024" className="about-us-icon16">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text7">{props.text5}</span>
              </div>
              <div className="about-us-check-item5">
                <svg viewBox="0 0 1024 1024" className="about-us-icon18">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text8">{props.text6}</span>
              </div>
              <div className="about-us-check-item6">
                <svg viewBox="0 0 1024 1024" className="about-us-icon20">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text9">{props.text7}</span>
              </div>
            </div>
          </div>
          <div className="about-us-image-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              loading="lazy"
              data-aos="fade"
              className="about-us-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-us-about {
            position: relative;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .about-us-max-width {
            max-width: 70%;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text-container {
            flex: 1;
            width: 40%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .about-us-text1 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .about-us-text2 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-us-text3 {
            color: var(--dl-color-scheme-black80);
            font-size: 24px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .about-us-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon10 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text4 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon12 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text5 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon14 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text6 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon16 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text7 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item5 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon18 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text8 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-check-item6 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-us-icon20 {
            fill: var(--dl-color-scheme-green);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text9 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-image {
            flex: 1;
            width: 630px;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }

          @media (max-width: 1600px) {
            .about-us-image {
              width: 550px;
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .about-us-max-width {
              max-width: unset;
            }
          }
          @media (max-width: 991px) {
            .about-us-max-width {
              flex-direction: column;
            }
            .about-us-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-image-container {
              width: 100%;
            }
            .about-us-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

AboutUs.defaultProps = {
  imageAlt: 'image',
  text3: 'Availability',
  text1: 'We are a full air duct cleaning service',
  imageSrc: '/photo-1621905252507-b35492cc74b4-1100w.webp',
  text2: 'Quality service all time',
  text7: 'Support in any implementation',
  text4: 'FREE Estimate',
  rootClassName: '',
  text: 'about us',
  text6: 'integrity',
  text5: 'Over 10 years in the business',
}

AboutUs.propTypes = {
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
}

export default AboutUs
