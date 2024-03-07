import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks3 from './navigation-links3'

const Navigation3 = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation3-header ${props.rootClassName} `}
      >
        <div className="navigation3-max-width">
          <img
            id="logo"
            alt="logo"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dd3475cb-e247-4b02-a0d4-66b000eeedf6?org_if_sml=1&amp;q=8014046&amp;force_format=original"
            width="150"
            height="68"
            loading="lazy"
            className="navigation3-image"
          />
          <a
            href="tel:+18885031722"
            className="navigation3-register button-secondary button button-md"
          >
            {props.button1}
          </a>
          <div className="navigation3-nav">
            <NavigationLinks3 rootClassName="navigation-links3-root-class-name17"></NavigationLinks3>
            <a
              href="tel:+18885031722"
              className="navigation3-register1 button-secondary button button-md"
            >
              {props.button}
            </a>
          </div>
          <div data-role="BurgerMenu" className="navigation3-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation3-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="mobile-menu navigation3-mobile-menu"
          >
            <div className="navigation3-nav1">
              <div className="navigation3-container">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="navigation3-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="navigation3-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation3-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks3 rootClassName="navigation-links3-root-class-name18"></NavigationLinks3>
              <a
                href="tel:+18885031722"
                className="navigation3-call-now button-secondary button button-md"
              >
                {props.button2}
              </a>
            </div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navigation3-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation3-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-width: 1170px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .navigation3-image {
            width: 150px;
            height: auto;
            text-decoration: none;
          }
          .navigation3-register {
            width: auto;
            display: none;
            text-decoration: none;
          }
          .navigation3-nav {
            flex: auto 0 0;
            width: auto;
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navigation3-register1 {
            color: var(--dl-color-scheme-green);
            width: auto;
            font-size: 14px;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .navigation3-burger-menu {
            display: none;
          }
          .navigation3-icon {
            fill: var(--dl-color-scheme-darkblue);
            width: 24px;
            height: 24px;
            display: flex;
          }
          .navigation3-nav1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .navigation3-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation3-image1 {
            width: 140px;
            text-decoration: none;
          }
          .navigation3-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation3-icon2 {
            width: 24px;
            height: 24px;
          }
          .navigation3-call-now {
            text-decoration: none;
          }

          .navigation3-root-class-name1 {
            display: none;
          }
          .navigation3-root-class-name2 {
            display: none;
          }
          .navigation3-root-class-name3 {
            top: 0px;
            left: 0px;
          }

          .navigation3-root-class-name6 {
            top: 0px;
            left: 0px;
          }
          .navigation3-root-class-name7 {
            top: 0px;
            left: 0px;
          }
          .navigation3-root-class-name8 {
            top: 0px;
            left: 0px;
          }
          @media (max-width: 1600px) {
            .navigation3-max-width {
              width: 100%;
              min-width: 70%;
            }
            .navigation3-image {
              width: 140px;
            }
            .navigation3-register1 {
              font-size: 14px;
            }
            .navigation3-image1 {
              width: 140px;
            }
          }
          @media (max-width: 1200px) {
            .navigation3-max-width {
              min-width: 100%;
            }
            .navigation3-register1 {
              font-size: 14px;
            }
          }
          @media (max-width: 991px) {
            .navigation3-max-width {
              position: relative;
            }
            .navigation3-register {
              color: var(--dl-color-scheme-green);
              display: flex;
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation3-nav {
              display: none;
            }
            .navigation3-burger-menu {
              display: flex;
            }
            .navigation3-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation3-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
          }
          @media (max-width: 767px) {
            .navigation3-max-width {
              padding: var(--dl-space-space-unit);
              position: relative;
              padding-right: 16px;
            }
            .navigation3-register {
              font-size: 12px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .navigation3-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation3-image1 {
              width: 180px;
            }
            .navigation3-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
          }
          @media (max-width: 479px) {
            .navigation3-image {
              width: 145px;
              height: auto;
            }
            .navigation3-register {
              color: var(--dl-color-scheme-green);
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              margin-right: 0px;
              margin-bottom: 0px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation3-nav {
              display: none;
            }
            .navigation3-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation3-image1 {
              width: 140px;
            }
            .navigation3-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation3-call-now {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation3.defaultProps = {
  rootClassName: '',
  button: '(888)-503-1722',
  button2: '(888)-503-1722',
  imageAlt: 'logo',
  imageAlt1: 'image',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  imageSrc1: '/external/logo-651.svg',
  button1: '(888)-503-1722',
}

Navigation3.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  button1: PropTypes.string,
}

export default Navigation3
