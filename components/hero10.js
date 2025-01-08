import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero10 = (props) => {
  return (
    <>
      <div className={`hero10-container ${props.rootClassName} `}>
        <div className="hero10-column thq-section-padding">
          <div className="hero10-content">
            <h1 className="hero10-heading1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero10-text3">
                    Engaging hero headline for your website
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="Content">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero10-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero10-actions">
              <a
                href={props.buttonUrl}
                className="hero10-button1 thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero10-text1">Main action</span>
                    </Fragment>
                  )}
                </span>
              </a>
              <a
                href="tel:+18885031722"
                className="hero10-button2 thq-button-outline"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero10-text4">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
        <img
          src={props.imageSrc1}
          alt={props.imageAlt1}
          className="hero10-image"
        />
      </div>
      <style jsx>
        {`
          .hero10-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
          }
          .hero10-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 50%;
            height: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero10-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero10-heading1 {
            font-size: 3.11em;
            font-family: 'Rubik';
            font-weight: 900;
            line-height: em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .hero10-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero10-button1 {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .hero10-button2 {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
          }
          .hero10-image {
            width: 50%;
            height: auto;
            object-fit: cover;
          }
          .hero10-text1 {
            display: inline-block;
          }
          .hero10-text2 {
            display: inline-block;
          }
          .hero10-text3 {
            display: inline-block;
          }
          .hero10-text4 {
            display: inline-block;
          }
          .hero10root-class-name {
            margin-top: 85px;
          }
          @media (max-width: 991px) {
            .hero10-container {
              flex-direction: column-reverse;
            }
            .hero10-column {
              width: 100%;
            }
            .hero10-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .hero10-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero10-actions {
              flex-direction: column;
            }
            .hero10-button1 {
              width: 100%;
            }
            .hero10-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero10.defaultProps = {
  action1: undefined,
  content1: undefined,
  buttonUrl: 'https://www.teleporthq.io',
  heading1: undefined,
  action2: undefined,
  rootClassName: '',
  imageSrc1: '/photo-new-800w.webp',
  imageAlt1: 'image',
}

Hero10.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  buttonUrl: PropTypes.string,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Hero10
