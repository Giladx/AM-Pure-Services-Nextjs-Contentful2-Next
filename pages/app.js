import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const App = (props) => {
  return (
    <>
      <div className="app-container1">
        <Head>
          <title>
            App - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="App - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="app-container2">
          <div className="app-container3">
            <Script
              html={`<iframe id="JotFormIFrame-221005831703443" title="AM Pure Services APP" src="https://www.jotform.com/app/221005831703443?appEmbedded=1" style="width:100%;height:100%;border: 0;"></iframe>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-container2 {
            width: 100%;
            height: 100vh;
            align-self: center;
          }
          .app-container3 {
            display: contents;
          }
          @media (max-width: 479px) {
            .app-container1 {
              align-items: center;
            }
            .app-container2 {
              width: 100%;
              height: 100vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default App

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
