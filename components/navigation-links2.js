import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks2 = (props) => {
  return (
    <>
      <nav className={`navigation-links2-nav ${props.rootClassName} `}>
        <span className="navigation-links2-text">{props.link1}</span>
        <span className="navigation-links2-text1">{props.link2}</span>
        <span className="navigation-links2-text2">{props.link3}</span>
        <span className="navigation-links2-text3">{props.link4}</span>
        <span className="navigation-links2-text4">{props.link5}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links2-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            flex-direction: row;
          }
          .navigation-links2-text {
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links2-text1 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links2-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links2-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links2-text4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }

          .navigation-links2-root-class-name17 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-links2-text1 {
              margin-left: 15px;
            }
            .navigation-links2-text2 {
              margin-left: 15px;
            }
            .navigation-links2-text3 {
              margin-left: 15px;
            }
            .navigation-links2-text4 {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links2-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links2-text {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text1 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text3 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text4 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks2.defaultProps = {
  rootClassName: '',
  link5: 'BUSINESS RELATIONS',
  link4: 'CONTACT',
  link2: 'SERVICES',
  link1: 'OUR MONTHLY SPECIALS',
  link3: 'ABOUT',
}

NavigationLinks2.propTypes = {
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
  link4: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks2
