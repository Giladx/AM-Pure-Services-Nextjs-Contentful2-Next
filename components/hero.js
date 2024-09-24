import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import ListContainer from './list-container'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero section-container">
        <div className="hero-max-width max-content-container">
          <div className="hero-heading-container">
            <ListContainer rootClassName="list-containerroot-class-name1"></ListContainer>
            <Link href="/monthly-specials">
              <a className="hero-link button-primary button-lg button">
                {props.primary}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            height: 900px;
            position: relative;
            padding-top: 128px;
            background-size: cover;
            background-image: url('/bg2.svg');
          }
          .hero-max-width {
            height: 100%;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
          }
          .hero-heading-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-link {
            margin-bottom: 128px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero-heading-container {
              width: auto;
              height: auto;
              max-width: auto;
              min-width: auto;
              max-height: auto;
              min-height: auto;
              margin-bottom: 42px;
            }
          }
          @media (max-width: 767px) {
            .hero-heading-container {
              width: auto;
              height: 738px;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero-max-width {
              height: auto;
            }
            .hero-heading-container {
              width: auto;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .hero-link {
              margin-bottom: 128px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  primary: 'MONTHLY SPECIALS',
}

Hero.propTypes = {
  primary: PropTypes.string,
}

export default Hero
