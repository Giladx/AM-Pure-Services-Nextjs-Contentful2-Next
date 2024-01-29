import React from 'react'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <div
        className={`footer1-footer section-container ${props.rootClassName} `}
      >
        <div className="footer1-max-width max-content-container">
          <div className="footer1-top-part">
            <div className="footer1-links-container">
              <div className="footer1-product-container">
                <span className="footer1-text">{props.text1}</span>
                <span className="footer1-text01">{props.text2}</span>
                <span className="footer1-text02">{props.text3}</span>
                <span className="footer1-text03">{props.text4}</span>
                <span className="footer1-text04">{props.text5}</span>
              </div>
            </div>
            <div className="footer1-navigate-container">
              <span className="footer1-text05">{props.text6}</span>
              <span className="footer1-text06">
                <span>ABOUT</span>
                <br></br>
              </span>
              <span className="footer1-text09">{props.text7}</span>
              <span className="footer1-text10">{props.text8}</span>
            </div>
            <div className="footer1-contact-container">
              <span className="footer1-text11">{props.text9}</span>
              <a href="tel:+18885031722" className="footer1-link">
                {props.text11}
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer1-link1"
              >
                {props.text10}
              </a>
            </div>
            <div className="footer1-subscribe-container">
              <span className="footer1-text12">{props.text}</span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="footer1-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer1-separator"></div>
        <footer className="footer1-max-width1 max-content-container">
          <img
            alt="image"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/000fad9f-8d7a-40d6-be6b-9b79e07f3a13?org_if_sml=1&amp;q=8014046&amp;force_format=original"
            width="150"
            height="68"
            className="footer1-image"
          />
          <span className="footer1-text13">{props.text12}</span>
          <span className="footer1-text14">{props.text121}</span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer1-footer {
            position: relative;
          }
          .footer1-max-width {
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer1-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text01 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-text02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-text03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-text04 {
            text-decoration: none;
          }
          .footer1-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text05 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-text09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-text10 {
            text-decoration: none;
          }
          .footer1-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text11 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer1-link1 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer1-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer1-text12 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-textinput {
            outline: none;
            align-self: stretch;
            padding-top: 4px;
            border-color: rgba(0, 0, 0, 0.1);
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .footer1-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer1-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-text13 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .footer1-text14 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }

          .footer1-root-class-name1 {
            display: none;
          }
          .footer1-root-class-name2 {
            display: none;
          }

          @media (max-width: 1600px) {
            .footer1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-text13 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .footer1-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer1-link1 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer1-text13 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .footer1-text13 {
              text-align: center;
            }
            .footer1-text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer1-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer1-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-text13 {
              text-align: center;
            }
            .footer1-text14 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer1-links-container {
              position: relative;
            }
            .footer1-product-container {
              width: auto;
            }
            .footer1-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer1-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer1-link1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-max-width1 {
              flex-direction: column;
            }
            .footer1-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer1-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text121: 'Developed by 011.ninja',
  text10: 'SERVICE@AMPURESERVICES.COM',
  text8: 'CONTACT',
  text3: 'AIR DUCT CLEANING',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  text11: '(888) 503-1722',
  imageAlt: 'image',
  text: 'Subscribe to our newsletter',
  text12: 'All rights reserved @ AM Pure Services',
  text5: 'UV LIGHT',
  text7: 'RESTRICTIONS',
  text6: 'Info',
  text9: 'Contact Us',
  textinputPlaceholder: 'Enter your e-mail address',
  text1: 'Product',
  text2: 'MONTHLY SPECIALS',
  text4: 'DRYER VENT CLEANING',
  rootClassName: '',
  button: 'Subscribe',
}

Footer1.propTypes = {
  text121: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  imageSrc: PropTypes.string,
  text11: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  text12: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Footer1
