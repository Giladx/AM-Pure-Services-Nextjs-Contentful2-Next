import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import Packages from '../components/packages'
import Banner from '../components/banner'
import monthlySpecialsResource from '../resources/monthly-specials'
import monthlySpecials1Resource from '../resources/monthly-specials1'

const MonthlySpecials = (props) => {
  return (
    <>
      <div className="monthly-specials-container1">
        <Head>
          <title>
            Monthly-Specials - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Monthly-Specials - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation></Navigation>
        <main className="monthly-specials-main">
          <div className="monthly-specials-title">
            <div className="monthly-specials-title-wrap">
              <span className="monthly-specials-text10">
                <span>OUR MONTHLY</span>
                <br></br>
              </span>
            </div>
            <span className="monthly-specials-text13">SPECIALS</span>
          </div>
          <Packages rootClassName="packagesroot-class-name"></Packages>
          <div className="monthly-specials-blog">
            <div className="monthly-specials-container2">
              <span className="monthly-specials-text14">from blog</span>
              <h2 className="monthly-specials-text15">
                <span>Our Services</span>
                <br></br>
              </h2>
            </div>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="monthly-specials-container3">
                    <Repeater
                      items={params}
                      renderItem={(context_kof7x) => (
                        <Fragment>
                          <div className="monthly-specials-blog-cards-container">
                            <Link href={`/post/${context_kof7x?.slug}`}>
                              <a className="monthly-specials-link10">
                                <div className="monthly-specials-blog-card">
                                  <img
                                    alt="image"
                                    src={context_kof7x?.coverImage?.url}
                                    loading="lazy"
                                    className="monthly-specials-image1"
                                  />
                                  <div className="monthly-specials-container4">
                                    <div className="monthly-specials-tags">
                                      <Repeater
                                        items={context_kof7x?.tag || []}
                                        renderItem={(context_9oxe3a) => (
                                          <Fragment>
                                            <span className="monthly-specials-text18">
                                              {context_9oxe3a?.tagName}
                                            </span>
                                          </Fragment>
                                        )}
                                        renderEmpty={() => (
                                          <Fragment>
                                            <span>Text</span>
                                          </Fragment>
                                        )}
                                      />
                                    </div>
                                    <div className="monthly-specials-date">
                                      <span className="monthly-specials-date-time">
                                        <DateTimePrimitive
                                          format="DD/MM/YYYY"
                                          date={context_kof7x?.date}
                                        ></DateTimePrimitive>
                                      </span>
                                    </div>
                                  </div>
                                  <span className="monthly-specials-text20">
                                    {context_kof7x?.title}
                                  </span>
                                  <div className="monthly-specials-container5">
                                    <span>Read More</span>
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      className="monthly-specials-icon1"
                                    >
                                      <path d="M810 298h86v256h-648l154 154-60 60-256-256 256-256 60 60-154 154h562v-172z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              initialData={props.contextKof7xProp}
              persistDataDuringLoading={true}
            />
          </div>
          <Banner rootClassName="bannerroot-class-name3"></Banner>
        </main>
        <div className="monthly-specials-footer section-container">
          <div className="monthly-specials-max-width1 max-content-container">
            <div className="monthly-specials-top-part">
              <div className="monthly-specials-links-container">
                <div className="monthly-specials-product-container">
                  <span className="monthly-specials-text22">Product</span>
                  <Link href="/monthly-specials">
                    <a className="monthly-specials-link11">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <Fragment>
                        <div className="monthly-specials-container6">
                          <Repeater
                            items={params}
                            renderItem={(context_rxexon) => (
                              <Fragment>
                                <Link href={`/post/${context_rxexon?.slug}`}>
                                  <a className="monthly-specials-link12">
                                    {context_rxexon?.title}
                                  </a>
                                </Link>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    initialData={props.contextRxexonProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="monthly-specials-navigate-container">
                <span className="monthly-specials-text23">Info</span>
                <Link href="/about">
                  <a className="monthly-specials-link13">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="monthly-specials-link14">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="monthly-specials-link15">CONTACT</a>
                </Link>
              </div>
              <div className="monthly-specials-contact-container">
                <span className="monthly-specials-text26">Contact Us</span>
                <a href="tel:+18885031722" className="monthly-specials-link16">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="monthly-specials-link17"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="monthly-specials-subscribe-container">
                <span className="monthly-specials-text27">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="monthly-specials-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="monthly-specials-separator"></div>
          <footer className="monthly-specials-max-width2 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="/logoam-200h.webp"
                  width="150"
                  height="68"
                  className="monthly-specials-image2"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="monthly-specials-link19">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="monthly-specials-link20"
            >
              Developed by 011.ninja
            </a>
          </footer>
          <a
            href="https://bytii.cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="monthly-specials-signature">
              <span className="monthly-specials-text28">Bytii Cloud</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .monthly-specials-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .monthly-specials-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monthly-specials-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            border-color: var(--dl-color-scheme-lightgreen);
            border-width: 1px;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .monthly-specials-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monthly-specials-text10 {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
          }
          .monthly-specials-text13 {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Sigmar One;
            font-weight: 500;
            padding-left: 5px;
            text-transform: none;
            text-decoration: none;
            background-image: -webkit-linear-gradient(
              328deg,
              violet,
              indigo,
              blue,
              green,
              yellow,
              orange,
              red
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .monthly-specials-blog {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .monthly-specials-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monthly-specials-text14 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .monthly-specials-text15 {
            font-size: 46px;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .monthly-specials-container3 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .monthly-specials-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .monthly-specials-link10 {
            display: contents;
          }
          .monthly-specials-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .monthly-specials-image1 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .monthly-specials-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .monthly-specials-tags {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .monthly-specials-text18 {
            color: var(--dl-color-scheme-white);
            padding: var(--dl-space-space-halfunit);
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            border-color: var(--dl-color-scheme-darkgray);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-scheme-darkgray);
          }
          .monthly-specials-date {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .monthly-specials-date-time {
            font-size: 12px;
            text-align: right;
            font-weight: 700;
          }
          .monthly-specials-text20 {
            font-style: normal;
            font-weight: 600;
          }
          .monthly-specials-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .monthly-specials-icon1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .monthly-specials-footer {
            position: relative;
          }
          .monthly-specials-max-width1 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .monthly-specials-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .monthly-specials-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .monthly-specials-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monthly-specials-text22 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .monthly-specials-link11 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-container6 {
            display: grid;
          }
          .monthly-specials-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monthly-specials-text23 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .monthly-specials-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .monthly-specials-text26 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .monthly-specials-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .monthly-specials-link17 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .monthly-specials-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monthly-specials-text27 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .monthly-specials-textinput {
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
          .monthly-specials-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .monthly-specials-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .monthly-specials-image2 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .monthly-specials-link19 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .monthly-specials-link20 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .monthly-specials-signature {
            left: 5px;
            bottom: 5px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .monthly-specials-text28 {
            color: rgb(201, 206, 218);
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 1600px) {
            .monthly-specials-container4 {
              width: 100%;
              flex-direction: row;
            }
            .monthly-specials-tags {
              width: 70%;
              flex-direction: row;
            }
            .monthly-specials-text18 {
              color: var(--dl-color-scheme-white);
              padding: var(--dl-space-space-halfunit);
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              border-color: var(--dl-color-scheme-white80);
              border-width: 1px;
              margin-right: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius8);
              background-color: var(--dl-color-scheme-darkgray);
            }
            .monthly-specials-date {
              width: 30%;
              align-items: flex-end;
            }
            .monthly-specials-date-time {
              font-size: 12px;
              text-align: right;
              font-weight: 700;
            }
            .monthly-specials-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .monthly-specials-image1 {
              height: 180px;
            }
            .monthly-specials-text20 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .monthly-specials-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .monthly-specials-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-link16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .monthly-specials-link17 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .monthly-specials-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .monthly-specials-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .monthly-specials-blog-card {
              max-width: 550px;
            }
            .monthly-specials-link19 {
              text-align: center;
            }
            .monthly-specials-link20 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .monthly-specials-text10 {
              font-size: 30px;
            }
            .monthly-specials-text13 {
              font-size: 35px;
            }
            .monthly-specials-container3 {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .monthly-specials-blog-card {
              max-width: 450px;
            }
            .monthly-specials-image1 {
              height: auto;
            }
            .monthly-specials-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .monthly-specials-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .monthly-specials-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-link19 {
              text-align: center;
            }
            .monthly-specials-link20 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .monthly-specials-text10 {
              font-size: 25px;
            }
            .monthly-specials-text13 {
              font-size: 25px;
            }
            .monthly-specials-blog-card {
              max-width: 350px;
            }
            .monthly-specials-top-part {
              align-items: center;
              flex-direction: column;
            }
            .monthly-specials-links-container {
              position: relative;
            }
            .monthly-specials-product-container {
              width: auto;
            }
            .monthly-specials-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .monthly-specials-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .monthly-specials-link17 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .monthly-specials-max-width2 {
              flex-direction: column;
            }
            .monthly-specials-image2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .monthly-specials-link19 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default MonthlySpecials

export async function getStaticProps(context) {
  try {
    const contextRxexonProp = await monthlySpecials1Resource({
      ...context?.params,
    })
    const contextKof7xProp = await monthlySpecialsResource({
      ...context?.params,
    })
    return {
      props: {
        contextRxexonProp: contextRxexonProp,
        contextKof7xProp: contextKof7xProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
    }
  }
}
