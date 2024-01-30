import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Blog from '../../components/blog'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import postPageInitialPathsCbcbfResource from '../../resources/post-page-initial-paths-cbcbf'
import postPageInitialPropsB957bResource from '../../resources/post-page-initial-props-b957b'

const Post = (props) => {
  return (
    <>
      <div className="post-container">
        <Head>
          <title>
            Post - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Post - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <Navigation></Navigation>
        <DataProvider
          renderSuccess={(PostEntity) => (
            <>
              <div className="post-post-layout">
                <div className="post-title">
                  <div className="post-title-wrap">
                    <span className="post-text">{PostEntity?.title}</span>
                  </div>
                </div>
                <div className="post-post">
                  <img
                    alt={PostEntity?.coverImage?.alt}
                    src={
                      PostEntity?.coverImage?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="eager"
                    className="post-image"
                  />
                  <div className="post-details">
                    <div className="post-author">
                      <span>Author:</span>
                      <img
                        src={PostEntity?.author?.picture?.url}
                        alt={PostEntity?.author?.picture?.name}
                        loading="lazy"
                        className="post-image1"
                      />
                      <span className="post-name">
                        {PostEntity?.author?.name}
                      </span>
                    </div>
                    <div className="post-date">
                      <span className="post-text2">Date:</span>
                      <span className="post-date-time">
                        <DateTimePrimitive
                          format="MMM D, YYYY"
                          date={PostEntity?.date}
                        ></DateTimePrimitive>
                      </span>
                    </div>
                  </div>
                  <div className="post-container1">
                    <RichText richText={PostEntity?.content}></RichText>
                  </div>
                  <img
                    alt={PostEntity?.image1?.alt}
                    src={
                      PostEntity?.image1?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="lazy"
                    className="post-image2"
                  />
                  <div className="post-container2">
                    <RichText richText={PostEntity?.content2 || ' '}></RichText>
                  </div>
                  <img
                    alt={PostEntity?.image2?.alt}
                    src={
                      PostEntity?.image2?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="lazy"
                    className="post-image3"
                  />
                  <div className="post-container3">
                    <RichText richText={PostEntity?.content3 || ' '}></RichText>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.postEntity}
          persistDataDuringLoading={true}
          key={props?.postEntity?.slug}
        />
        <Blog rootClassName="blog-root-class-name"></Blog>
        <Banner rootClassName="banner-root-class-name22"></Banner>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post-post-layout {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .post-post {
            gap: 12px;
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .post-image {
            width: 100%;
            object-fit: cover;
          }
          .post-details {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            border-color: var(--dl-color-scheme-darkgray);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .post-author {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .post-image1 {
            width: 70px;
            object-fit: cover;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post-name {
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post-date {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .post-text2 {
            width: var(--dl-size-size-small);
          }
          .post-date-time {
            width: auto;
            height: 100%;
            align-self: flex-end;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .post-container1 {
            width: 100%;
            align-self: stretch;
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-image2 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-container2 {
            width: 100%;
            align-self: stretch;
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-image3 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-container3 {
            width: 100%;
            align-self: stretch;
            line-height: 2;
          }
          @media (max-width: 1200px) {
            .post-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .post-title-wrap {
              width: 100%;
            }
            .post-text {
              margin: 0p0x;
              padding: var(--dl-space-space-unit);
              text-align: center;
            }
            .post-author {
              width: 50%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .post-image1 {
              width: 24px;
            }
            .post-date {
              width: 50%;
            }
            .post-date-time {
              align-self: flex-end;
            }
          }
          @media (max-width: 767px) {
            .post-title-wrap {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .post-text {
              width: 100%;
              font-size: 42px;
            }
            .post-post {
              width: 100%;
              padding: 15px;
            }
          }
          @media (max-width: 479px) {
            .post-text {
              width: 100%;
              font-size: 35px;
            }
          }
        `}
      </style>
    </>
  )
}

Post.defaultProps = {
  postEntity: [],
}

Post.propTypes = {
  postEntity: PropTypes.array,
}

export default Post

export async function getStaticPaths() {
  try {
    const response = await postPageInitialPathsCbcbfResource({
      content_type: 'post',
      select: 'fields.slug',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.fields?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialPropsB957bResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntity: response?.data?.[0],
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
