import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import servicesResource from '../resources/services'
import services1Resource from '../resources/services1'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>
            Services - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Services - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
        <div className="services-main">
          <div className="services-title">
            <span className="services-text">
              <span>SERVICES</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="services-blog">
          <div className="services-container1">
            <span className="services-text03">from blog</span>
            <h2 className="services-text04">
              <span>Our Services</span>
              <br></br>
            </h2>
          </div>
          <DataProvider
            renderSuccess={(params) => (
              <>
                <div className="services-container2">
                  <Repeater
                    items={params}
                    renderItem={(context_tvp7o9) => (
                      <>
                        <div className="services-blog-cards-container">
                          <Link href={`/post/${context_tvp7o9?.slug}`}>
                            <a className="services-link">
                              <div className="services-blog-card">
                                <img
                                  alt="image"
                                  src={context_tvp7o9?.coverImage?.url}
                                  loading="lazy"
                                  className="services-image"
                                />
                                <div className="services-container3">
                                  <div className="services-tags">
                                    <Repeater
                                      items={context_tvp7o9?.tag || []}
                                      renderItem={(context_9oxe3a) => (
                                        <>
                                          <span className="services-text07">
                                            {context_9oxe3a?.tagName}
                                          </span>
                                        </>
                                      )}
                                      renderEmpty={() => (
                                        <>
                                          <span>Text</span>
                                        </>
                                      )}
                                    />
                                  </div>
                                  <div className="services-date">
                                    <span className="services-date-time">
                                      <DateTimePrimitive
                                        format="DD/MM/YYYY"
                                        date={context_tvp7o9?.date}
                                      ></DateTimePrimitive>
                                    </span>
                                  </div>
                                </div>
                                <span className="services-text09">
                                  {context_tvp7o9?.title}
                                </span>
                                <div className="services-container4">
                                  <span>Read More</span>
                                  <svg
                                    viewBox="0 0 1024 1024"
                                    className="services-icon"
                                  >
                                    <path d="M810 298h86v256h-648l154 154-60 60-256-256 256-256 60 60-154 154h562v-172z"></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </>
                    )}
                  />
                </div>
              </>
            )}
            initialData={props.contextTvp7o9Prop}
            persistDataDuringLoading={true}
          />
        </div>
        <Banner rootClassName="banner-root-class-name6"></Banner>
        <div className="services-footer section-container">
          <div className="services-max-width max-content-container">
            <div className="services-top-part">
              <div className="services-links-container">
                <div className="services-product-container">
                  <span className="services-text11">Product</span>
                  <Link href="/monthly-specials">
                    <a className="services-link01">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <>
                        <div className="services-container5">
                          <Repeater
                            items={params}
                            renderItem={(context_fwbrpn) => (
                              <>
                                <Link href={`/post/${context_fwbrpn?.slug}`}>
                                  <a className="services-link02">
                                    {context_fwbrpn?.title}
                                  </a>
                                </Link>
                              </>
                            )}
                          />
                        </div>
                      </>
                    )}
                    initialData={props.contextFwbrpnProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="services-navigate-container">
                <span className="services-text12">Info</span>
                <Link href="/about">
                  <a className="services-link03">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="services-link04">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="services-link05">CONTACT</a>
                </Link>
              </div>
              <div className="services-contact-container">
                <span className="services-text15">Contact Us</span>
                <a href="tel:+18885031722" className="services-link06">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="services-link07"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="services-subscribe-container">
                <span className="services-text16">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="services-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="services-separator"></div>
          <footer className="services-max-width1 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="services-image1"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="services-link09">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="services-link10"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 0px;
          }
          .services-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .services-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.3em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .services-blog {
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
          .services-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text03 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .services-text04 {
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
          .services-container2 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .services-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-link {
            display: contents;
          }
          .services-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .services-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .services-tags {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .services-text07 {
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
          .services-date {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-date-time {
            font-size: 12px;
            text-align: right;
            font-weight: 700;
          }
          .services-text09 {
            font-style: normal;
            font-weight: 600;
          }
          .services-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .services-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .services-footer {
            position: relative;
          }
          .services-max-width {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .services-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-text11 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-link01 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-container5 {
            display: grid;
          }
          .services-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-text12 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-text15 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .services-link07 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .services-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text16 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-textinput {
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
          .services-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .services-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .services-image1 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .services-link09 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .services-link10 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .services-container3 {
              width: 100%;
              flex-direction: row;
            }
            .services-tags {
              width: 70%;
              flex-direction: row;
            }
            .services-text07 {
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
            .services-date {
              width: 30%;
              align-items: flex-end;
            }
            .services-date-time {
              font-size: 12px;
              text-align: right;
              font-weight: 700;
            }
            .services-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .services-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .services-link09 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .services-image {
              height: 180px;
            }
            .services-text09 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .services-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .services-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .services-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .services-link06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .services-link07 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .services-link09 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .services-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .services-blog-card {
              max-width: 550px;
            }
            .services-link09 {
              text-align: center;
            }
            .services-link10 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .services-text {
              font-size: 30px;
            }
            .services-container2 {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .services-blog-card {
              max-width: 450px;
            }
            .services-image {
              height: auto;
            }
            .services-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .services-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .services-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .services-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .services-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .services-link09 {
              text-align: center;
            }
            .services-link10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .services-text {
              font-size: 25px;
            }
            .services-blog-card {
              max-width: 350px;
            }
            .services-top-part {
              align-items: center;
              flex-direction: column;
            }
            .services-links-container {
              position: relative;
            }
            .services-product-container {
              width: auto;
            }
            .services-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .services-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .services-link07 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .services-max-width1 {
              flex-direction: column;
            }
            .services-image1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .services-link09 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Services

export async function getStaticProps(context) {
  try {
    const contextFwbrpnProp = await services1Resource({
      ...context?.params,
    })
    const contextTvp7o9Prop = await servicesResource({
      ...context?.params,
    })
    return {
      props: {
        contextFwbrpnProp: contextFwbrpnProp,
        contextTvp7o9Prop: contextTvp7o9Prop,
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
