import React from 'react'

import PropTypes from 'prop-types'

const Footer2 = (props) => {
  return (
    <>
      <div
        className={`footer2-footer section-container ${props.rootClassName} `}
      >
        <div className="footer2-max-width max-content-container">
          <div className="footer2-top-part">
            <div className="footer2-links-container">
              <div className="footer2-product-container">
                <span className="footer2-text">{props.text1}</span>
                <span className="footer2-text01">{props.text2}</span>
                <span className="footer2-text02">{props.text3}</span>
                <span className="footer2-text03">{props.text4}</span>
                <span className="footer2-text04">{props.text5}</span>
              </div>
            </div>
            <div className="footer2-navigate-container">
              <span className="footer2-text05">{props.text6}</span>
              <span className="footer2-text06">
                <span>ABOUT</span>
                <br></br>
              </span>
              <span className="footer2-text09">{props.text7}</span>
              <span className="footer2-text10">{props.text8}</span>
            </div>
            <div className="footer2-contact-container">
              <span className="footer2-text11">{props.text9}</span>
              <a href="tel:+18885031722" className="footer2-link">
                {props.text11}
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer2-link1"
              >
                {props.text10}
              </a>
            </div>
            <div className="footer2-subscribe-container">
              <span className="footer2-text12">{props.text}</span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="footer2-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer2-separator"></div>
        <footer className="footer2-max-width1 max-content-container">
          <img
            alt="image"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/3f0591ab-e0db-49c2-8a0c-50f507a05462?org_if_sml=1&amp;q=8014046&amp;force_format=original"
            width="150"
            height="68"
            className="footer2-image"
          />
          <span className="footer2-text13">{props.text12}</span>
          <span className="footer2-text14">{props.text121}</span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer2-footer {
            position: relative;
          }
          .footer2-max-width {
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer2-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer2-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer2-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer2-text {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer2-text01 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-text02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-text03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-text04 {
            text-decoration: none;
          }
          .footer2-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer2-text05 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer2-text06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-text09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-text10 {
            text-decoration: none;
          }
          .footer2-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer2-text11 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer2-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer2-link1 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer2-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer2-text12 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer2-textinput {
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
          .footer2-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer2-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer2-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer2-text13 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .footer2-text14 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }

          .footer2-root-class-name1 {
            display: none;
          }
          .footer2-root-class-name2 {
            display: none;
          }

          @media (max-width: 1600px) {
            .footer2-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-text13 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .footer2-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer2-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer2-link1 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer2-text13 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .footer2-text13 {
              text-align: center;
            }
            .footer2-text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .footer2-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer2-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer2-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-text13 {
              text-align: center;
            }
            .footer2-text14 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer2-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer2-links-container {
              position: relative;
            }
            .footer2-product-container {
              width: auto;
            }
            .footer2-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer2-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer2-link1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer2-max-width1 {
              flex-direction: column;
            }
            .footer2-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer2-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer2.defaultProps = {
  text: 'Subscribe to our newsletter',
  text5: 'UV LIGHT',
  text121: 'Developed by 011.ninja',
  text11: '(888) 503-1722',
  rootClassName: '',
  button: 'Subscribe',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  text3: 'AIR DUCT CLEANING',
  text7: 'RESTRICTIONS',
  text8: 'CONTACT',
  text10: 'SERVICE@AMPURESERVICES.COM',
  textinputPlaceholder: 'Enter your e-mail address',
  imageAlt: 'image',
  text2: 'MONTHLY SPECIALS',
  text4: 'DRYER VENT CLEANING',
  text9: 'Contact Us',
  text12: 'All rights reserved @ AM Pure Services',
  text6: 'Info',
  text1: 'Product',
}

Footer2.propTypes = {
  text: PropTypes.string,
  text5: PropTypes.string,
  text121: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text10: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text9: PropTypes.string,
  text12: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
}

export default Footer2
