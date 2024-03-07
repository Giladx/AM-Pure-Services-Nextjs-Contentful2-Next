import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import postPageInitialPropsTqFbResource from '../../resources/post-page-initial-props-tq_fb'

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
                                      <span className="post1-text3">
                                        {context_8pi5th?.tagName}
                                      </span>
                                    </>
                                  )}
                                />
                                <span className="post1-text4">Dec 8, 2022</span>
                              </div>
                              <span className="post1-text5">
                                {PostEntities?.title}
                              </span>
                              <div className="post1-container3">
                                <span className="post1-text6">Read More</span>
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
        <Footer rootClassName="footer-root-class-name4"></Footer>
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
          .post1-text3 {
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
          .post1-text4 {
            font-size: 12px;
            font-style: normal;
            font-weight: 900;
          }
          .post1-text5 {
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
          .post1-text6 {
            font-style: normal;
            font-weight: 900;
          }
          .post1-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          @media (max-width: 1200px) {
            .post1-image {
              height: 180px;
            }
            .post1-text5 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .post1-container1 {
              grid-template-columns: repeat(2, 1fr);
            }
            .post1-blog-card {
              max-width: 550px;
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
          }
          @media (max-width: 479px) {
            .post1-text {
              font-size: 25px;
            }
            .post1-blog-card {
              max-width: auto;
              flex-direction: column;
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
    const response = await postPageInitialPropsTqFbResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
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
