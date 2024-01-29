import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.link1}</span>
        <span className="navigation-links1-text1">{props.link2}</span>
        <span className="navigation-links1-text2">{props.link3}</span>
        <span className="navigation-links1-text3">{props.link4}</span>
        <span className="navigation-links1-text4">{props.link5}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text {
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links1-text1 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }

          .navigation-links1-root-class-name17 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-links1-text1 {
              margin-left: 15px;
            }
            .navigation-links1-text2 {
              margin-left: 15px;
            }
            .navigation-links1-text3 {
              margin-left: 15px;
            }
            .navigation-links1-text4 {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text4 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  link1: 'OUR MONTHLY SPECIALS',
  rootClassName: '',
  link3: 'ABOUT',
  link5: 'BUSINESS RELATIONS',
  link2: 'SERVICES',
  link4: 'CONTACT',
}

NavigationLinks1.propTypes = {
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
}

export default NavigationLinks1
