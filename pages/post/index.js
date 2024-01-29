import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import postPageInitialProps5d601Resource from '../../resources/post-page-initial-props-5d601'

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
            <span>SERVICES</span>
            <br></br>
          </span>
        </div>
        <div className="post1-blog-posts">
          <div className="post1-grid">
            <DataProvider
              renderSuccess={(params) => (
                <>
                  <Repeater
                    items={params}
                    renderItem={(PostEntities) => (
                      <>
                        <div className="post1-blog-cards-container">
                          <Link href={`/post/${PostEntities?.slug}`}>
                            <a className="post1-link">
                              <div className="post1-blog-card">
                                <img
                                  alt={
                                    PostEntities?.coverImage?.alt ||
                                    'am pure services'
                                  }
                                  src={
                                    PostEntities?.coverImage?.url ||
                                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                                  }
                                  loading="lazy"
                                  className="post1-image"
                                />
                                <div className="post1-container1">
                                  <button className="post1-button button-secondary button">
                                    Fallback value
                                  </button>
                                  <span className="post1-text3">
                                    {[0]?.date}
                                    {PostEntities?.date}
                                  </span>
                                </div>
                                <span className="post1-text4">
                                  {[0]?.title}
                                  {PostEntities?.title}
                                </span>
                                <span>Read More</span>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </>
                    )}
                  />
                </>
              )}
              initialData={props.postEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
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
            font-family: Rubik;
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
          .post1-grid {
            width: auto;
            height: auto;
            margin: auto 0;
            display: grid;
            grid-gap: 1.5rem;
            align-self: center;
            grid-template-columns: repeat(3, 1fr);
          }
          .post1-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-link {
            display: contents;
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
          .post1-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .post1-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .post1-text3 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
          }
          .post1-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .post1-image {
              height: 180px;
            }
            .post1-text4 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .post1-grid {
              width: var(--dl-size-size-maxwidth);
              max-width: 480px;
              grid-template-columns: repeat(1, 1fr);
            }
            .post1-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .post1-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .post1-text {
              font-size: 30px;
            }
            .post1-blog-card {
              max-width: 450px;
            }
          }
          @media (max-width: 479px) {
            .post1-text {
              font-size: 25px;
            }
            .post1-grid {
              width: 100%;
              padding: 15px;
            }
            .post1-blog-card {
              max-width: 350px;
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
    const response = await postPageInitialProps5d601Resource({
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
