import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Banner from '../../components/banner'
import postPageInitialPropsTqWmResource from '../../resources/post-page-initial-props-tq_wm'
import post1Resource from '../../resources/post1'

const Post1 = (props) => {
  return (
    <>
      <div className="post1-container">
        <Head>
          <title>
            Post1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Post1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name9"></Navigation>
        <div className="post1-title">
          <span className="post1-text">
            <span>BLOG</span>
            <br></br>
          </span>
        </div>
        <div className="post1-blog-posts">
          <DataProvider
            renderSuccess={(params) => (
              <>
                <div className="post1-container1">
                  <Repeater
                    items={params}
                    renderItem={(PostEntities) => (
                      <>
                        <Link href={`/post/${PostEntities?.slug}`}>
                          <a>
                            <div className="post1-blog-card">
                              <img
                                alt="image"
                                src={PostEntities?.coverImage?.url}
                                loading="lazy"
                                className="post1-image"
                              />
                              <div className="post1-container2">
                                <Repeater
                                  items={PostEntities?.tag || ' '}
                                  renderItem={(context_8pi5th) => (
                                    <>
                                      <span className="post1-text03">
                                        {context_8pi5th?.tagName}
                                      </span>
                                    </>
                                  )}
                                />
                                <span className="post1-text04">
                                  Dec 8, 2022
                                </span>
                              </div>
                              <span className="post1-text05">
                                {PostEntities?.title}
                              </span>
                              <div className="post1-container3">
                                <span className="post1-text06">Read More</span>
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="post1-icon"
                                >
                                  <path d="M810 298h86v256h-648l154 154-60 60-256-256 256-256 60 60-154 154h562v-172z"></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </>
                    )}
                  />
                </div>
              </>
            )}
            initialData={props.postEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </div>
        <Banner rootClassName="banner-root-class-name21"></Banner>
        <div className="post1-footer section-container">
          <div className="post1-max-width max-content-container">
            <div className="post1-top-part">
              <div className="post1-links-container">
                <div className="post1-product-container">
                  <span className="post1-text07">Product</span>
                  <Link href="/monthly-specials">
                    <a className="post1-link01">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <>
                        <div className="post1-container4">
                          <Repeater
                            items={params}
                            renderItem={(context_0kxs0s) => (
                              <>
                                <span className="post1-text08">
                                  {context_0kxs0s?.title}
                                </span>
                              </>
                            )}
                          />
                        </div>
                      </>
                    )}
                    initialData={props.context0kxs0sProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="post1-navigate-container">
                <span className="post1-text09">Info</span>
                <Link href="/about">
                  <a className="post1-link02">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="post1-link03">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="post1-link04">CONTACT</a>
                </Link>
              </div>
              <div className="post1-contact-container">
                <span className="post1-text12">Contact Us</span>
                <a href="tel:+18885031722" className="post1-link05">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="post1-link06"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="post1-subscribe-container">
                <span className="post1-text13">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="post1-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="post1-separator"></div>
          <footer className="post1-max-width1 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="post1-image1"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="post1-link08">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="post1-link09"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .post1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post1-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post1-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            text-align: center;
            font-family: 'Rubik';
            font-weight: 900;
            line-height: 1.3em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .post1-blog-posts {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .post1-container1 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .post1-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .post1-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post1-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-text03 {
            color: var(--dl-color-scheme-white);
            width: auto;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            line-height: 1.2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-scheme-darkgray);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-scheme-darkgray);
          }
          .post1-text04 {
            font-size: 12px;
            font-style: normal;
            font-weight: 900;
          }
          .post1-text05 {
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post1-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .post1-text06 {
            font-style: normal;
            font-weight: 900;
          }
          .post1-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post1-footer {
            position: relative;
          }
          .post1-max-width {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .post1-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post1-text07 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post1-link01 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-container4 {
            display: grid;
          }
          .post1-text08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post1-text09 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post1-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .post1-text12 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post1-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post1-link06 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .post1-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post1-text13 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post1-textinput {
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
          .post1-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .post1-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-image1 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .post1-link08 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .post1-link09 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .post1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post1-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post1-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .post1-image {
              height: 180px;
            }
            .post1-text05 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .post1-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .post1-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post1-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post1-link05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post1-link06 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .post1-link08 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .post1-container1 {
              grid-template-columns: repeat(2, 1fr);
            }
            .post1-blog-card {
              max-width: 550px;
            }
            .post1-link08 {
              text-align: center;
            }
            .post1-link09 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .post1-text {
              font-size: 30px;
            }
            .post1-container1 {
              width: 100%;
              padding: 15px;
              grid-template-columns: repeat(1, 1fr);
            }
            .post1-blog-card {
              max-width: 450px;
            }
            .post1-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .post1-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .post1-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post1-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post1-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .post1-link08 {
              text-align: center;
            }
            .post1-link09 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .post1-text {
              font-size: 25px;
            }
            .post1-blog-card {
              max-width: auto;
              flex-direction: column;
            }
            .post1-top-part {
              align-items: center;
              flex-direction: column;
            }
            .post1-links-container {
              position: relative;
            }
            .post1-product-container {
              width: auto;
            }
            .post1-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .post1-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .post1-link06 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post1-max-width1 {
              flex-direction: column;
            }
            .post1-image1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post1-link08 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Post1.defaultProps = {
  postEntities: [],
}

Post1.propTypes = {
  postEntities: PropTypes.array,
}

export default Post1

export async function getStaticProps(context) {
  try {
    const context0kxs0sProp = await post1Resource({
      ...context?.params,
    })
    if (!context0kxs0sProp) {
      return {
        notFound: true,
      }
    }
    const response = await postPageInitialPropsTqWmResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        context0kxs0sProp: context0kxs0sProp,
        postEntities: response,
        ...response?.meta,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
