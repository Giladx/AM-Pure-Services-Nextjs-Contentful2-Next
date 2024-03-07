import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Info = (props) => {
  return (
    <>
      <div className="info-container">
        <Head>
          <title>
            Info - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Info - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="info-dead-end">
          <h1 className="info-text">
            <span>Sorry your password could not be verified.</span>
            <br></br>
            <span>But you can always make yourself a sandcastle!</span>
            <br></br>
          </h1>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/fun1-1500w.gif"
            srcSet="/fun1-1500w.gif 1200w, /fun1-tablet.gif 800w, /fun1-mobile.gif 480w"
            className="info-image"
          />
          <button id="backButton" type="button" className="info-button button">
            <span className="info-text5">Try Again</span>
          </button>
          <div>
            <div className="info-container2">
              <Script
                html={`<script>
  document.getElementById("backButton").addEventListener("click", () => {
  history.back();
  });
</script>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .info-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .info-dead-end {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            text-align: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .info-text {
            color: var(--dl-color-scheme-green);
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .info-image {
            width: 35em;
            align-self: center;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .info-button {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            font-size: 1.5rem;
            align-self: center;
            border-color: var(--dl-color-scheme-green);
            background-color: var(--dl-color-scheme-green);
          }
          .info-text5 {
            font-style: normal;
            font-weight: 700;
          }
          .info-container2 {
            display: contents;
          }
          @media (max-width: 479px) {
            .info-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Info
