import React, { useEffect } from 'react'
import Head from 'next/head'

const Mail = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="mail-container">
        <Head>
          <title>
            mail - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="mail - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="mail-container1">
          <h1 className="mail-text Heading1">
            Our Mail Server Is Working Over Time
          </h1>
          <div className="mail-div">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_bkwkyxrg.json"
              loop
              speed="1"
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mail-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .mail-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mail-text {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .mail-div {
            width: 300px;
            height: 300px;
          }
        `}
      </style>
    </>
  )
}

export default Mail
