import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavigationLinks3 = (props) => {
  return (
    <>
      <nav className={`navigation-links3-nav ${props.rootClassName} `}>
        <span className="navigation-links3-text1">{props.link1}</span>
        <span className="navigation-links3-text2">{props.link2}</span>
        <span className="navigation-links3-text3">{props.link3}</span>
        <span className="navigation-links3-text4">{props.link4}</span>
        <span className="navigation-links3-text5">{props.link5}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links3-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            flex-direction: row;
          }
          .navigation-links3-text1 {
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links3-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links3-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links3-text4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links3-text5 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }

          .navigation-links3root-class-name17 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-links3-text2 {
              margin-left: 15px;
            }
            .navigation-links3-text3 {
              margin-left: 15px;
            }
            .navigation-links3-text4 {
              margin-left: 15px;
            }
            .navigation-links3-text5 {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links3-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links3-text1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links3-text2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links3-text3 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links3-text4 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links3-text5 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks3.defaultProps = {
  rootClassName: '',
  link5: 'BUSINESS RELATIONS',
  link2: 'SERVICES',
  link1: 'OUR MONTHLY SPECIALS',
  link3: 'ABOUT',
  link4: 'CONTACT',
}

NavigationLinks3.propTypes = {
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
}

export default NavigationLinks3
