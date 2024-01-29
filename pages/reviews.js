import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'

const Reviews = (props) => {
  return (
    <>
      <div className="reviews-container">
        <Head>
          <title>
            Reviews - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Reviews - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a9b9a8f2-be01-41ae-838f-381e8ec5a736/20f16b04-d5e9-437e-ac34-d5c544c97085?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Navigation></Navigation>
        <div className="reviews-title">
          <span className="reviews-text">
            <span>AM PURE SERVICES REVIEWS</span>
            <br></br>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .reviews-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reviews-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .reviews-text {
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
          @media (max-width: 767px) {
            .reviews-text {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .reviews-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Reviews
