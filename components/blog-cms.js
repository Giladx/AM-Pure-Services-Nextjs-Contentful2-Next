import React from 'react'
import Link from 'next/link'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const BlogCMS = (props) => {
  return (
    <>
      <div className={`blog-cms-container ${props.rootClassName} `}>
        <div className="blog-cms-container1">
          <span className="blog-cms-text">{props.text}</span>
          <h2 className="blog-cms-text1">
            <span>Our Services</span>
            <br></br>
          </h2>
        </div>
        <div className="blog-cms-container2">
          <DataProvider
            fetchData={(params) =>
              fetch(
                `/api/blog-cms-resource-blog-cms?${new URLSearchParams(
                  params
                )}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => data)
            }
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(context_sp2aum) => (
                    <>
                      <div className="blog-cms-blog-cards-container">
                        <Link href={`/post/${context_sp2aum?.slug}`}>
                          <a className="blog-cms-link">
                            <div className="blog-cms-blog-card">
                              <img
                                alt={props.imageAlt}
                                src={context_sp2aum?.coverImage?.url}
                                loading="lazy"
                                className="blog-cms-image"
                              />
                              <div className="blog-cms-container3">
                                <div className="blog-cms-tags">
                                  <Repeater
                                    items={context_sp2aum?.tag || []}
                                    renderItem={(context_9oxe3a) => (
                                      <>
                                        <span className="blog-cms-text4">
                                          {context_9oxe3a?.tagName}
                                        </span>
                                      </>
                                    )}
                                    renderEmpty={() => (
                                      <>
                                        <span>{props.text8}</span>
                                      </>
                                    )}
                                  />
                                </div>
                                <div className="blog-cms-date">
                                  <span className="blog-cms-date-time">
                                    <DateTimePrimitive
                                      format="MMM D, YYYY"
                                      date={context_sp2aum?.date}
                                    ></DateTimePrimitive>
                                  </span>
                                </div>
                              </div>
                              <span className="blog-cms-text6">
                                {context_sp2aum?.title}
                              </span>
                              <div className="blog-cms-container4">
                                <span>{props.text6}</span>
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="blog-cms-icon"
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
              </>
            )}
          />
        </div>
      </div>
      <style jsx>
        {`
          .blog-cms-container {
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
          .blog-cms-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-cms-text {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .blog-cms-text1 {
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
          .blog-cms-container2 {
            width: auto;
            height: auto;
            margin: auto 0;
            display: grid;
            grid-gap: 1.5rem;
            align-self: center;
            grid-template-columns: repeat(3, 1fr);
          }
          .blog-cms-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-cms-link {
            display: contents;
          }
          .blog-cms-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blog-cms-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-cms-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-cms-tags {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .blog-cms-text4 {
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
          .blog-cms-date {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .blog-cms-date-time {
            font-size: 12px;
            text-align: right;
            font-weight: 700;
          }
          .blog-cms-text6 {
            font-style: normal;
            font-weight: 600;
          }
          .blog-cms-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .blog-cms-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }

          @media (max-width: 1600px) {
            .blog-cms-container3 {
              width: 100%;
              flex-direction: row;
            }
            .blog-cms-tags {
              width: 70%;
              flex-direction: row;
            }
            .blog-cms-text4 {
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
            .blog-cms-date {
              width: 30%;
              align-items: flex-end;
            }
            .blog-cms-date-time {
              font-size: 12px;
              text-align: right;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .blog-cms-image {
              height: 180px;
            }
            .blog-cms-text6 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .blog-cms-container2 {
              width: var(--dl-size-size-maxwidth);
              max-width: 480px;
              grid-template-columns: repeat(1, 1fr);
            }
            .blog-cms-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .blog-cms-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .blog-cms-blog-card {
              max-width: 450px;
            }
          }
          @media (max-width: 479px) {
            .blog-cms-container2 {
              width: 100%;
              padding: 15px;
            }
            .blog-cms-blog-card {
              max-width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCMS.defaultProps = {
  text: 'from blog',
  button: 'Web Design',
  text21: 'Air Duct Cleaning',
  text6: 'Read More',
  text7: 'Text',
  imageAlt1: 'image',
  rootClassName: '',
  text10: 'Text',
  imagealt: 'clean air duct',
  text3: 'Next',
  text8: 'Text',
  text5: 'Next',
  rootClassName1: '',
  text1: 'Read More',
  text4: 'Previous',
  text2: 'Previous',
  imageAlt: 'image',
  imageSrc: '086d8dc4-0839-4d98-b708-54162939fad4',
  text11: 'Dec 8, 2022',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text9: 'Text',
}

BlogCMS.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
  text21: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text10: PropTypes.string,
  imagealt: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  rootClassName1: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text11: PropTypes.string,
  imageSrc1: PropTypes.string,
  text9: PropTypes.string,
}

export default BlogCMS
