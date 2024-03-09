import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import aboutResource from '../resources/about'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>
            About - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="About - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/20f16b04-d5e9-437e-ac34-d5c544c97085?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        <main className="about-main">
          <div className="about-title">
            <div className="about-title-wrap">
              <span className="about-text">
                <span>ABOUT AM PURE SERVICES</span>
                <br></br>
              </span>
            </div>
          </div>
          <span className="about-text03">
            <span className="about-text04">What we do?</span>
            <br></br>
            <br></br>
            <span>
              We clean air ducts with trained and certified technicians,
            </span>
            <br></br>
            <span>
              Use one of the most powerful and effective duct cleaning systems
            </span>
            <br></br>
            <span>on the market today.</span>
            <br></br>
            <span>
              We train the best and brightest duct cleaning technicians that
              Michigan has to offer.
            </span>
            <br></br>
            <span>
              All technicians are certified, allowing them to understand the
              needs of your air ducts.
            </span>
            <br></br>
            <br></br>
            <span className="about-text18">Our experience:</span>
            <br></br>
            <br></br>
            <span>
              AM Services takes pride in more than ten years of field experience
              in the
            </span>
            <br></br>
            <span>duct cleaning industry.</span>
            <br></br>
            <span>
              We aim to provide professional service and help you understand the
              meaning and importance of clean air ducts.
            </span>
            <br></br>
            <span>
              Along with our massive experience, we make one of the
              industry&apos;s most powerful duct cleaning teams.
            </span>
            <br></br>
            <br></br>
            <span className="about-text30">
              We hope to serve you well!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <Banner rootClassName="banner-root-class-name4"></Banner>
        </main>
        <div className="about-footer section-container">
          <div className="about-max-width max-content-container">
            <div className="about-top-part">
              <div className="about-links-container">
                <div className="about-product-container">
                  <span className="about-text31">Product</span>
                  <Link href="/monthly-specials">
                    <a className="about-link">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <>
                        <div className="about-container1">
                          <Repeater
                            items={params}
                            renderItem={(context_jfwijc) => (
                              <>
                                <Link href={`/post/${context_jfwijc?.slug}`}>
                                  <a className="about-link01">
                                    {context_jfwijc?.title}
                                  </a>
                                </Link>
                              </>
                            )}
                          />
                        </div>
                      </>
                    )}
                    initialData={props.contextJfwijcProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="about-navigate-container">
                <span className="about-text32">Info</span>
                <Link href="/about">
                  <a className="about-link02">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="about-link03">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="about-link04">CONTACT</a>
                </Link>
              </div>
              <div className="about-contact-container">
                <span className="about-text35">Contact Us</span>
                <a href="tel:+18885031722" className="about-link05">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="about-link06"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="about-subscribe-container">
                <span className="about-text36">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="about-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="about-separator"></div>
          <footer className="about-max-width1 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="about-image"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="about-link08">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="about-link09"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .about-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .about-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .about-text03 {
            width: 768px;
            font-size: 26px;
            align-self: center;
            text-align: left;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .about-text04 {
            font-weight: 700;
          }
          .about-text18 {
            font-weight: 700;
          }
          .about-text30 {
            font-weight: 700;
          }
          .about-footer {
            position: relative;
          }
          .about-max-width {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .about-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text31 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-link {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-container1 {
            display: grid;
          }
          .about-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text32 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text35 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-link06 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .about-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-text36 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-textinput {
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
          .about-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .about-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .about-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .about-link08 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .about-link09 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .about-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .about-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .about-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-link05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-link06 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .about-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .about-link08 {
              text-align: center;
            }
            .about-link09 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .about-text {
              font-size: 30px;
            }
            .about-text03 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .about-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-link08 {
              text-align: center;
            }
            .about-link09 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .about-text {
              font-size: 25px;
            }
            .about-top-part {
              align-items: center;
              flex-direction: column;
            }
            .about-links-container {
              position: relative;
            }
            .about-product-container {
              width: auto;
            }
            .about-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .about-link06 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-max-width1 {
              flex-direction: column;
            }
            .about-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-link08 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About

export async function getStaticProps(context) {
  try {
    const contextJfwijcProp = await aboutResource({
      ...context?.params,
    })
    if (!contextJfwijcProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextJfwijcProp: contextJfwijcProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
