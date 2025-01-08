import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  DateTimePrimitive,
  Repeater,
} from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Navigation from '../../components/navigation'
import BlogCard from '../../components/blog-card'
import Banner from '../../components/banner'
import postPageInitialPropsTqU6Resource from '../../resources/post-page-initial-props-tq_u6'
import postPageInitialPathsTqSResource from '../../resources/post-page-initial-paths-tq_s-'
import postResource from '../../resources/post'

const Post = (props) => {
  return (
    <>
      <div className="post-container1">
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
            <Fragment>
              <div className="post-post-layout">
                <div className="post-title">
                  <div className="post-title-wrap">
                    <span className="post-text10">{PostEntity?.title}</span>
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
                    className="post-image1"
                  />
                  <div className="post-details">
                    <div className="post-author">
                      <span>Author:</span>
                      <img
                        alt={PostEntity?.author?.picture?.name}
                        src={PostEntity?.author?.picture?.url}
                        loading="lazy"
                        className="post-image2"
                      />
                      <span className="post-name">
                        {PostEntity?.author?.name}
                      </span>
                    </div>
                    <div className="post-date">
                      <span className="post-text12">Date:</span>
                      <span className="post-date-time">
                        <DateTimePrimitive
                          format="MMM D, YYYY"
                          date={PostEntity?.date}
                        ></DateTimePrimitive>
                      </span>
                    </div>
                  </div>
                  <div className="post-container2">
                    <RichText richText={PostEntity?.content}></RichText>
                  </div>
                  <img
                    alt={PostEntity?.image1?.alt}
                    src={
                      PostEntity?.image1?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="lazy"
                    className="post-image3"
                  />
                  <div className="post-container3">
                    <RichText richText={PostEntity?.content2 || ' '}></RichText>
                  </div>
                  <img
                    alt={PostEntity?.image2?.alt}
                    src={
                      PostEntity?.image2?.url ||
                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                    }
                    loading="lazy"
                    className="post-image4"
                  />
                  <div className="post-container4">
                    <RichText richText={PostEntity?.content3 || ' '}></RichText>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
          initialData={props.postEntity}
          persistDataDuringLoading={true}
          key={props?.postEntity?.slug}
        />
        <div className="post-blog section-container">
          <div className="post-max-width1 max-content-container">
            <span className="post-text13">from blog</span>
            <h2 className="post-text14 Heading1">
              <span>Our Services</span>
              <br></br>
            </h2>
            <div className="post-blog-cards-container">
              <BlogCard
                text="Read More"
                button="Duct Clean"
                imageAlt="clean air duct"
                imageSrc="3da283b8-0aff-4f0e-b44f-c221909e999b"
                rootClassName="blog-cardroot-class-name19"
                className="post-component2"
              ></BlogCard>
              <BlogCard
                text="Read More"
                text1="Aug 14, 2022"
                text2="DRYER VENT CLEANING"
                button="DRYER VENT"
                imageSrc="086d8dc4-0839-4d98-b708-54162939fad4"
                rootClassName="blog-cardroot-class-name22"
                className="post-component3"
              ></BlogCard>
              <BlogCard
                text="Read More"
                text1="Jul 12, 2022"
                text2="UV Light"
                button="UV"
                imageSrc="98586708-3375-431c-9190-593e611b5b4f"
                rootClassName="blog-cardroot-class-name23"
                className="post-component4"
              ></BlogCard>
            </div>
          </div>
        </div>
        <Banner rootClassName="bannerroot-class-name22"></Banner>
        <div className="post-footer section-container">
          <div className="post-max-width2 max-content-container">
            <div className="post-top-part">
              <div className="post-links-container">
                <div className="post-product-container">
                  <span className="post-text17">Product</span>
                  <Link href="/monthly-specials">
                    <a className="post-link10">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <Fragment>
                        <div className="post-container5">
                          <Repeater
                            items={params}
                            renderItem={(context_gu7li) => (
                              <Fragment>
                                <Link href={`/post/${context_gu7li?.slug}`}>
                                  <a className="post-link11">
                                    {context_gu7li?.title}
                                  </a>
                                </Link>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    initialData={props.contextGu7liProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="post-navigate-container">
                <span className="post-text18">Info</span>
                <Link href="/about">
                  <a className="post-link12">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="post-link13">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="post-link14">CONTACT</a>
                </Link>
              </div>
              <div className="post-contact-container">
                <span className="post-text21">Contact Us</span>
                <a href="tel:+18885031722" className="post-link15">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="post-link16"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="post-subscribe-container">
                <span className="post-text22">Subscribe to our newsletter</span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="post-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="post-separator"></div>
          <footer className="post-max-width3 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="post-image5"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="post-link18">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="post-link19"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .post-container1 {
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
          .post-text10 {
            width: 100%;
            font-size: 3em;
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
          .post-image1 {
            width: 100%;
            object-fit: cover;
          }
          .post-details {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            border-color: rgba(216, 216, 216, 0.8);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .post-author {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .post-image2 {
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
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-end;
          }
          .post-text12 {
            width: var(--dl-size-size-small);
          }
          .post-date-time {
            width: auto;
            height: 100%;
            align-self: flex-end;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
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
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-image4 {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .post-container4 {
            width: 100%;
            align-self: stretch;
            line-height: 2;
          }
          .post-blog {
            position: relative;
            border-color: var(--dl-color-scheme-lightgreen);
            border-width: 1px;
            border-top-width: 10px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 10px;
          }
          .post-max-width1 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .post-text13 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .post-text14 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .post-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .post-component2 {
            text-decoration: none;
          }
          .post-component3 {
            text-decoration: none;
          }
          .post-component4 {
            text-decoration: none;
          }
          .post-footer {
            position: relative;
          }
          .post-max-width2 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .post-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .post-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .post-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post-text17 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post-link10 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-container5 {
            display: grid;
          }
          .post-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .post-text18 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .post-text21 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .post-link16 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .post-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .post-text22 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .post-textinput {
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
          .post-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .post-max-width3 {
            flex-direction: row;
            justify-content: space-between;
          }
          .post-image5 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .post-link18 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .post-link19 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .post-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post-link18 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .post-text10 {
              font-size: 2.5em;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
              text-transform: uppercase;
            }
            .post-blog {
              border-width: 0px;
            }
            .post-max-width2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .post-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post-link15 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post-link16 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .post-link18 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .post-title-wrap {
              width: 100%;
            }
            .post-text10 {
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
            .post-image2 {
              width: 24px;
              display: none;
            }
            .post-date {
              width: 50%;
            }
            .post-date-time {
              align-self: flex-end;
            }
            .post-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .post-link18 {
              text-align: center;
            }
            .post-link19 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .post-title-wrap {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .post-text10 {
              width: 100%;
              font-size: 2em;
            }
            .post-post {
              width: 100%;
              padding: 15px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .post-author {
              align-items: center;
            }
            .post-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .post-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .post-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .post-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .post-link18 {
              text-align: center;
            }
            .post-link19 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .post-title-wrap {
              padding: var(--dl-space-space-unit);
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .post-text10 {
              width: 100%;
              font-size: 1.5em;
            }
            .post-post {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .post-details {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .post-author {
              width: 55%;
            }
            .post-date {
              width: 45%;
              justify-content: flex-end;
            }
            .post-date-time {
              text-align: right;
            }
            .post-top-part {
              align-items: center;
              flex-direction: column;
            }
            .post-links-container {
              position: relative;
            }
            .post-product-container {
              width: auto;
            }
            .post-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .post-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .post-link16 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .post-max-width3 {
              flex-direction: column;
            }
            .post-image5 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .post-link18 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
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

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const contextGu7liProp = await postResource({
      ...context?.params,
    })
    const response = await postPageInitialPropsTqU6Resource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        contextGu7liProp: contextGu7liProp,
        postEntity: response?.data?.[0],
        ...response?.meta,
      },
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
    const response = await postPageInitialPathsTqSResource({
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
