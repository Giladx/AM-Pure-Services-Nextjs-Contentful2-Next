import React from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import footerResource from '../resources/footer'

const Footer = (props) => {
  return (
    <>
      <div
        className={`footer-footer section-container ${props.rootClassName} `}
      >
        <div className="footer-max-width max-content-container">
          <div className="footer-top-part">
            <div className="footer-links-container">
              <div className="footer-product-container">
                <span className="footer-text">{props.text1}</span>
                <Link href="/monthly-specials">
                  <a className="footer-link">{props.text2}</a>
                </Link>
                <DataProvider
                  renderSuccess={(params) => (
                    <>
                      <Repeater
                        items={params}
                        renderItem={(context_fdk6dn) => (
                          <>
                            <Link href={`/post/${context_fdk6dn?.slug}`}>
                              <a className="footer-link01">
                                {context_fdk6dn?.title}
                              </a>
                            </Link>
                          </>
                        )}
                      />
                    </>
                  )}
                  initialData={props.contextFdk6dnProp}
                  persistDataDuringLoading={true}
                  initialData={props.contextFdk6dnProp}
                  persistDataDuringLoading={true}
                />
              </div>
            </div>
            <div className="footer-navigate-container">
              <span className="footer-text1">{props.text6}</span>
              <Link href="/about">
                <a className="footer-link02">
                  <span>ABOUT</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/restrictions">
                <a className="footer-link03">{props.text7}</a>
              </Link>
              <Link href="/contact">
                <a className="footer-link04">{props.text8}</a>
              </Link>
            </div>
            <div className="footer-contact-container">
              <span className="footer-text4">{props.text9}</span>
              <a href="tel:+18885031722" className="footer-link05">
                {props.text11}
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer-link06"
              >
                {props.text10}
              </a>
            </div>
            <div className="footer-subscribe-container">
              <span className="footer-text5">{props.text}</span>
              <input
                type="text"
                id="newsletter"
                placeholder={props.textinputPlaceholder}
                className="footer-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <footer className="footer-max-width1 max-content-container">
          <Link href="/">
            <a>
              <img
                alt="image"
                src="/logoam-200h.webp"
                width="150"
                height="68"
                className="footer-image"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="footer-link08">{props.text12}</a>
          </Link>
          <a
            href="https://011.ninja/bio"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link09"
          >
            {props.text121}
          </a>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-footer {
            position: relative;
          }
          .footer-max-width {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text1 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text4 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link06 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text5 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-textinput {
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
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link08 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .footer-link09 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }

          .footer-root-class-name1 {
            display: none;
          }
          .footer-root-class-name2 {
            display: none;
          }

          @media (max-width: 1600px) {
            .footer-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .footer-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-link05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link06 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .footer-link08 {
              text-align: center;
            }
            .footer-link09 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .footer-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer-link08 {
              text-align: center;
            }
            .footer-link09 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer-links-container {
              position: relative;
            }
            .footer-product-container {
              width: auto;
            }
            .footer-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer-link06 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-max-width1 {
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link08 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text81: 'REVIEWS',
  text3: 'AIR DUCT CLEANING',
  text1: 'Product',
  textinputPlaceholder: 'Enter your e-mail address',
  rootClassName: '',
  button: 'Subscribe',
  text121: 'Developed by 011.ninja',
  text6: 'Info',
  text8: 'CONTACT',
  text4: 'DRYER VENT CLEANING',
  imageAlt: 'image',
  text10: 'SERVICE@AMPURESERVICES.COM',
  text12: 'All rights reserved @ AM Pure Services',
  text9: 'Contact Us',
  text2: 'MONTHLY SPECIALS',
  text5: 'UV LIGHT',
  text: 'Subscribe to our newsletter',
  text31: 'AIR DUCT CLEANING',
  text11: '(888) 503-1722',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  text7: 'RESTRICTIONS',
}

Footer.propTypes = {
  text81: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text121: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  imageAlt: PropTypes.string,
  text10: PropTypes.string,
  text12: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text31: PropTypes.string,
  text11: PropTypes.string,
  imageSrc: PropTypes.string,
  text7: PropTypes.string,
}

export default Footer

export async function getStaticProps(context) {
  try {
    const contextFdk6dnProp = await footerResource({
      ...context?.params,
    })
    if (!contextFdk6dnProp) {
      return {
        notFound: true,
      }
    }
    const contextFdk6dnProp = await footerResource({
      ...context?.params,
    })
    if (!contextFdk6dnProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextFdk6dnProp: contextFdk6dnProp,
        contextFdk6dnProp: contextFdk6dnProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
