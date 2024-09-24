import React from 'react'

import PropTypes from 'prop-types'

const Footer3 = (props) => {
  return (
    <>
      <div
        className={`footer3-footer section-container ${props.rootClassName} `}
      >
        <div className="footer3-max-width1 max-content-container">
          <div className="footer3-top-part">
            <div className="footer3-links-container">
              <div className="footer3-product-container">
                <span className="footer3-text10">{props.text1}</span>
                <span className="footer3-text11">{props.text2}</span>
                <span className="footer3-text12">{props.text3}</span>
                <span className="footer3-text13">{props.text4}</span>
                <span className="footer3-text14">{props.text5}</span>
              </div>
            </div>
            <div className="footer3-navigate-container">
              <span className="footer3-text15">{props.text6}</span>
              <span className="footer3-text16">
                <span>ABOUT</span>
                <br></br>
              </span>
              <span className="footer3-text19">{props.text7}</span>
              <span className="footer3-text20">{props.text8}</span>
            </div>
            <div className="footer3-contact-container">
              <span className="footer3-text21">{props.text9}</span>
              <a href="tel:+18885031722" className="footer3-link1">
                {props.text11}
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer3-link2"
              >
                {props.text10}
              </a>
            </div>
            <div className="footer3-subscribe-container">
              <span className="footer3-text22">{props.text}</span>
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="footer3-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer3-separator"></div>
        <footer className="footer3-max-width2 max-content-container">
          <img
            alt="image"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/7aea089d-8b4d-41e5-9950-540b31bacbed?org_if_sml=1&amp;q=8014046&amp;force_format=original"
            width="150"
            height="68"
            className="footer3-image"
          />
          <span className="footer3-text23">{props.text12}</span>
          <span className="footer3-text24">{props.text121}</span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer3-footer {
            position: relative;
          }
          .footer3-max-width1 {
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer3-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer3-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer3-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer3-text10 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer3-text11 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-text12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-text13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-text14 {
            text-decoration: none;
          }
          .footer3-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer3-text15 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer3-text16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-text19 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-text20 {
            text-decoration: none;
          }
          .footer3-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer3-text21 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer3-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer3-link2 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer3-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer3-text22 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer3-textinput {
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
          .footer3-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer3-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer3-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer3-text23 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .footer3-text24 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }

          .footer3root-class-name1 {
            display: none;
          }
          .footer3root-class-name2 {
            display: none;
          }

          @media (max-width: 1600px) {
            .footer3-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-text23 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .footer3-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer3-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer3-link2 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer3-text23 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .footer3-text23 {
              text-align: center;
            }
            .footer3-text24 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .footer3-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer3-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer3-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-text23 {
              text-align: center;
            }
            .footer3-text24 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer3-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer3-links-container {
              position: relative;
            }
            .footer3-product-container {
              width: auto;
            }
            .footer3-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer3-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer3-link2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer3-max-width2 {
              flex-direction: column;
            }
            .footer3-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer3-text23 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer3.defaultProps = {
  text121: 'Developed by 011.ninja',
  text6: 'Info',
  text11: '(888) 503-1722',
  text3: 'AIR DUCT CLEANING',
  text10: 'SERVICE@AMPURESERVICES.COM',
  text9: 'Contact Us',
  textinputPlaceholder: 'Enter your e-mail address',
  text12: 'All rights reserved @ AM Pure Services',
  text2: 'MONTHLY SPECIALS',
  text7: 'RESTRICTIONS',
  button: 'Subscribe',
  text4: 'DRYER VENT CLEANING',
  text1: 'Product',
  text8: 'CONTACT',
  text: 'Subscribe to our newsletter',
  rootClassName: '',
  text5: 'UV LIGHT',
}

Footer3.propTypes = {
  text121: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text12: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  button: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
}

export default Footer3
