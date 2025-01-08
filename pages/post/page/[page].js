import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Navigation from '../../../components/navigation'
import Banner from '../../../components/banner'
import postPageInitialPropsTqKcResource from '../../../resources/post-page-initial-props-tq_kc'
import postPageInitialPathsTqQ8Resource from '../../../resources/post-page-initial-paths-tq_q8'
import post1Resource from '../../../resources/post1'

const Post11 = (props) => {
  return (
    <>
      <div className="post11-container1">
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
        <Navigation rootClassName="navigationroot-class-name9"></Navigation>
        <div className="post11-title">
          <span className="post11-text10">
            <span>BLOG</span>
            <br></br>
          </span>
        </div>
        <div className="post11-blog-posts">
          <DataProvider
            renderSuccess={(params) => (
              <Fragment>
                <div className="post11-container2">
                  <Repeater
                    items={params}
                    renderItem={(PostEntities) => (
                      <Fragment>
                        <Link href={`/post/${PostEntities?.slug}`}>
                          <a>
                            <div className="post11-blog-card">
                              <img
                                alt="image"
                                src={PostEntities?.coverImage?.url}
                                loading="lazy"
                                className="post11-image1"
                              />
                              <div className="post11-container3">
                                <Repeater
                                  items={PostEntities?.tag || ' '}
                                  renderItem={(context_8pi5th) => (
                                    <Fragment>
                                      <span className="post11-text13">
                                        {context_8pi5th?.tagName}
                                      </span>
                                    </Fragment>
                                  )}
                                />
                                <span className="post11-text14">
                                  Dec 8, 2022
                                </span>
                              </div>
                              <span className="post11-text15">
                                {PostEntities?.title}
                              </span>
                              <div className="post11-container4">
                                <span className="post11-text16">Read More</span>
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="post11-icon1"
                                >
                                  <path d="M810 298h86v256h-648l154 154-60 60-256-256 256-256 60 60-154 154h562v-172z"></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  />
                </div>
              </Fragment>
            )}
            initialData={props.postEntities}
            persistDataDuringLoading={true}
            key={props?.pagination?.page}
          />
        </div>
        <Banner rootClassName="bannerroot-class-name21"></Banner>
        <div className="post11-footer section-container">
          <div className="post11-max-width1 max-content-container">
            <div className="post11-top-part">
              <div className="post11-links-container">
                <div className="post11-product-container">
                  <span className="post11-text17">Product</span>
                  <Link href="/monthly-specials">
                    <a className="post11-link11">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <Fragment>
                        <div className="post11-container5">
                          <Repeater
                            items={params}
                            renderItem={(context_0kxs0s) => (
                              <Fragment>
                                <Link href={`/post/${context_0kxs0s?.slug}`}>
                                  <a className="post11-link12">
                                    {context_0kxs0s?.title}
                                  </a>
                                </Link>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    initialData={props.context0kxs0sProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="post11-navigate-container">
                <span className="post11-text18">Info</span>
                <Link href="/about">
                  <a className="post11-link13">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="post11-link14">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="post11-link15">CONTACT</a>
                </Link>
              </div>
              <div className="post11-contact-container">
                <span className="post11-text21">Contact Us</span>
                <a href="tel:+18885031722" className="post11-link16">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="post11-link17"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="post11-subscribe-container">
                <span className="post11-text22">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="post11-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="post11-separator"></div>
          <footer className="post11-max-width2 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="post11-image2"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="post11-link19">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="post11-link20"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .post11-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post11-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post11-text10 {
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
          .post11-blog-posts {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .post11-container2 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .post11-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .post11-image1 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post11-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .post11-text13 {
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
          .post11-text14 {
            font-size: 12px;
            font-style: normal;
            font-weight: 900;
          }
          .post11-text15 {
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post11-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .post11-text16 {
            font-style: normal;
            font-weight: 900;
          }
          .post11-icon1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post11-footer {
            position: relative;
          }
          .post11-max-width1 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .post11-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .post11-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .post11-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post11-text17 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post11-link11 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-container5 {
            display: grid;
          }
          .post11-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post11-text18 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post11-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .post11-text21 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post11-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post11-link17 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .post11-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post11-text22 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post11-textinput {
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
          .post11-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .post11-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .post11-image2 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .post11-link19 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .post11-link20 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .post11-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post11-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post11-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .post11-image1 {
              height: 180px;
            }
            .post11-text15 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .post11-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .post11-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post11-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post11-link16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post11-link17 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .post11-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .post11-container2 {
              grid-template-columns: repeat(2, 1fr);
            }
            .post11-blog-card {
              max-width: 550px;
            }
            .post11-link19 {
              text-align: center;
            }
            .post11-link20 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .post11-text10 {
              font-size: 30px;
            }
            .post11-container2 {
              width: 100%;
              padding: 15px;
              grid-template-columns: repeat(1, 1fr);
            }
            .post11-blog-card {
              max-width: 450px;
            }
            .post11-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .post11-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .post11-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post11-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post11-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .post11-link19 {
              text-align: center;
            }
            .post11-link20 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .post11-text10 {
              font-size: 25px;
            }
            .post11-blog-card {
              max-width: auto;
              flex-direction: column;
            }
            .post11-top-part {
              align-items: center;
              flex-direction: column;
            }
            .post11-links-container {
              position: relative;
            }
            .post11-product-container {
              width: auto;
            }
            .post11-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .post11-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .post11-link17 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post11-max-width2 {
              flex-direction: column;
            }
            .post11-image2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post11-link19 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Post11.defaultProps = {
  postEntities: [],
}

Post11.propTypes = {
  postEntities: PropTypes.array,
}

export default Post11

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const context0kxs0sProp = await post1Resource({
      ...context?.params,
    })
    const response = await postPageInitialPropsTqKcResource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
      skip: (context.params.page - 1) * 9,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        context0kxs0sProp: context0kxs0sProp,
        postEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await postPageInitialPathsTqQ8Resource({
      content_type: 'post',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 9)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
