import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Process = (props) => {
  return (
    <>
      <div
        className={`process-process section-container ${props.rootClassName} `}
      >
        <div className="process-max-width max-content-container">
          <span className="process-text10">{props.text}</span>
          <h2 className="process-text11 Heading2">
            <span>
              We use a simple three step process.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Take a look.</span>
          </h2>
          <div className="process-step1">
            <span className="process-text15">{props.text1}</span>
            <div className="process-container1">
              <span className="process-text16">{props.text4}</span>
              <span className="process-text17">{props.text5}</span>
            </div>
          </div>
          <div className="process-step2">
            <span className="process-text18">{props.text2}</span>
            <div className="process-container2">
              <span className="process-text19">{props.text6}</span>
              <span className="process-text20">{props.text7}</span>
            </div>
          </div>
          <div className="process-step3">
            <span className="process-text21">{props.text3}</span>
            <div className="process-container3">
              <span className="process-text22">{props.text8}</span>
              <span className="process-text23">{props.text9}</span>
            </div>
          </div>
          <a
            href="tel:+18885031722"
            className="process-button thq-button-filled"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g
                fill="none"
                color="currentColor"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6.6 11.923c5.073-9.454 11.39-9.563 13.913-8.436c1.127 2.524 1.018 8.84-8.436 13.913c-.098-.564-.643-2.04-2.04-3.437s-2.873-1.942-3.437-2.04"></path>
                <path d="M13.35 16.95c1.839.9 2.035 2.514 2.29 4.05c0 0 3.85-2.846 1.387-6.75M7.05 10.727C6.15 8.888 4.536 8.692 3 8.437c0 0 2.847-3.85 6.75-1.387m-3.732 7.862c-.512.511-1.382 1.996-.768 3.838c1.843.614 3.327-.256 3.84-.767M17.3 8.45a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0"></path>
              </g>
            </svg>
            <span className="process-action1">
              {props.action1 ?? (
                <Fragment>
                  <span className="process-text24">Let&apos;s Get Started</span>
                </Fragment>
              )}
            </span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .process-process {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .process-max-width {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .process-text10 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .process-text11 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .process-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text15 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text16 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text17 {
            color: var(--dl-color-scheme-white80);
          }
          .process-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text18 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text19 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text20 {
            color: var(--dl-color-scheme-white80);
          }
          .process-step3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text21 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text22 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text23 {
            color: var(--dl-color-scheme-white80);
          }
          .process-button {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            width: 100%;
            margin-top: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .process-action1 {
            text-transform: uppercase;
          }
          .process-text24 {
            display: inline-block;
          }
          .processroot-class-name {
            display: none;
          }
          .processroot-class-name1 {
            display: none;
          }
          @media (max-width: 767px) {
            .process-text15 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text18 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text21 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .process-text15 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text18 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text21 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Process.defaultProps = {
  action1: undefined,
  text8: 'Inspection of the results',
  rootClassName: '',
  text9:
    'Upon completion of the cleaning, AM technicians will perform a quality inspection to show the results of the cleaning.',
  text7:
    'Upon inspection, AM technicians will determine the best effective cleaning plan. Considering both time and price.',
  text4: 'Finding the dirt',
  text2: '02',
  text1: '01',
  text5:
    "Our technicians will start with performing a starter cleaning and performing an inspection to clarify the air duct's condition.",
  text6: 'Cleaning plan',
  text: 'Our process',
  text3: '03',
}

Process.propTypes = {
  action1: PropTypes.element,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  text9: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default Process
