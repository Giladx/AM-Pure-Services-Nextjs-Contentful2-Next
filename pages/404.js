import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>
            Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <img
          alt="image"
          sizes="(min-width: 768px) 800px, 480px"
          src="/404-800w.gif"
          srcSet="/404-800w.gif 800w, /404-mobile.gif 480w"
          className="page-image"
        />
        <span className="page-text1">Page Not Found</span>
        <Link href="/">
          <a className="page-link">
            <span>Go Back </span>
            <br></br>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-image {
            width: 727px;
            height: 442px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-text1 {
            color: var(--dl-color-scheme-green);
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-link {
            color: var(--dl-color-scheme-white);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-weight: 900;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-scheme-green);
          }
          @media (max-width: 1600px) {
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .page-text1 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .page-text1 {
              color: var(--dl-color-scheme-darkgray);
              width: 100%;
              align-self: center;
              text-align: center;
            }
            .page-link {
              color: var(--dl-color-scheme-darkgray);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page

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
