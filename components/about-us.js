import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AboutUs = (props) => {
  return (
    <>
      <div
        className={`about-us-about section-container ${props.rootClassName} `}
      >
        <div className="about-us-max-width max-content-container">
          <div className="about-us-text-container">
            <span className="about-us-text10">{props.text}</span>
            <h2 data-aos="fade-right" className="about-us-text11 Heading1">
              Peace of Mind, Guaranteed with Us.
            </h2>
            <span data-aos="fade-left" className="about-us-text12">
              {props.text1}
            </span>
            <div data-aos="fade-down" className="about-us-checklist">
              <div className="about-us-check-item1">
                <svg viewBox="0 0 1024 1024" className="about-us-icon10">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text13">{props.text2}</span>
              </div>
              <div className="about-us-check-item2">
                <svg viewBox="0 0 1024 1024" className="about-us-icon12">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text14">{props.text3}</span>
              </div>
              <div className="about-us-check-item3">
                <svg viewBox="0 0 1024 1024" className="about-us-icon14">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text15">{props.text4}</span>
              </div>
              <div className="about-us-check-item4">
                <svg viewBox="0 0 1024 1024" className="about-us-icon16">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text16">{props.text5}</span>
              </div>
              <div className="about-us-check-item5">
                <svg viewBox="0 0 1024 1024" className="about-us-icon18">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text17">{props.text6}</span>
              </div>
              <div className="about-us-check-item6">
                <svg viewBox="0 0 1024 1024" className="about-us-icon20">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-us-text18">{props.text7}</span>
              </div>
            </div>
            <a
              href="tel:+18885031722"
              className="about-us-button thq-button-filled"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                  fill="currentColor"
                ></path>
              </svg>
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="about-us-text19">Call Now</span>
                  </Fragment>
                )}
              </span>
            </a>
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
          .about-us-text10 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .about-us-text11 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-us-text12 {
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
          .about-us-text13 {
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
          .about-us-text14 {
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
          .about-us-text15 {
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
          .about-us-text16 {
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
          .about-us-text17 {
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
          .about-us-text18 {
            font-style: normal;
            font-weight: 500;
          }
          .about-us-button {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            margin-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .about-us-image {
            flex: 1;
            width: 630px;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .about-us-text19 {
            display: inline-block;
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
          @media (max-width: 479px) {
            .about-us-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

AboutUs.defaultProps = {
  action1: undefined,
  imageAlt: 'image',
  text3: 'Availability',
  text1: 'We are a full air duct cleaning service',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text2: 'Quality service all time',
  text7: 'Support in any implementation',
  text4: 'FREE Estimate',
  rootClassName: '',
  text: 'about us',
  text6: 'integrity',
  text5: 'Over 10 years in the business',
}

AboutUs.propTypes = {
  action1: PropTypes.element,
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
