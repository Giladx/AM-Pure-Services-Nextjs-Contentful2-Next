import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

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
        </Head>
        <div className="reviews-iframe">
          <div className="reviews-container1">
            <div className="reviews-container2">
              <Script
                html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-d95272eb-3c87-490e-a22b-7d750d4ba956" data-elfsight-app-lazy></div>`}
              ></Script>
            </div>
          </div>
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
          .reviews-iframe {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .reviews-container2 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .reviews-iframe {
              height: 1080px;
              margin-top: var(--dl-space-space-fiveunits);
              padding-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .reviews-container1 {
              width: 100%;
              height: 1080px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Reviews
