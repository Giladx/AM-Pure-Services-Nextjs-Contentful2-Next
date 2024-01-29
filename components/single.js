import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'

import Navigation3 from './navigation3'
import Banner3 from './banner3'
import Footer3 from './footer3'

const Single = (props) => {
  return (
    <>
      <div className="single-container">
        <Navigation3></Navigation3>
        <DataProvider
          fetchData={(params) =>
            fetch(`/api/post-resource-post?${new URLSearchParams(params)}`, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((res) => res.json())
              .then((data) => data?.data?.[0])
          }
          renderSuccess={(context_4xlbj4) => (
            <>
              <div className="single-title">
                <div className="single-title-wrap">
                  <h1 className="single-text">{context_4xlbj4?.title}</h1>
                </div>
              </div>
              <div className="single-single-post">
                <img
                  alt={props.imageAlt}
                  src={
                    context_4xlbj4?.coverImage?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="single-image"
                />
                <div className="single-container1">
                  <RichText richText={context_4xlbj4?.content}></RichText>
                </div>
                <img
                  alt={props.imageAlt2}
                  src={
                    context_4xlbj4?.image1?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="single-image1"
                />
                <div className="single-container2">
                  <RichText
                    richText={context_4xlbj4?.content2 || ' '}
                  ></RichText>
                </div>
                <img
                  alt={props.imageAlt1}
                  src={
                    context_4xlbj4?.image2?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="single-image2"
                />
                <div className="single-container3">
                  <RichText
                    richText={context_4xlbj4?.content3 || ' '}
                  ></RichText>
                </div>
              </div>
            </>
          )}
        />
        <Banner3 rootClassName="banner3-root-class-name17"></Banner3>
        <Footer3></Footer3>
      </div>
      <style jsx>
        {`
          .single-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .single-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .single-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .single-text {
            font-size: 48px;
            font-style: normal;
            font-weight: 900;
          }
          .single-single-post {
            flex: 0 0 auto;
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .single-image {
            width: 100%;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .single-container1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .single-image1 {
            width: 200px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .single-container2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .single-image2 {
            width: 200px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .single-container3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .single-text {
              font-size: 48px;
              font-style: normal;
              font-weight: 900;
            }
          }
          @media (max-width: 991px) {
            .single-text {
              width: 100%;
              font-size: 38px;
            }
          }
          @media (max-width: 767px) {
            .single-text {
              font-size: 28px;
            }
          }
          @media (max-width: 479px) {
            .single-text {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Single.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Heading',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt2: 'image',
  imageAlt: 'image',
}

Single.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Single
