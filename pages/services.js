import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import BlogCMS from '../components/blog-cms'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>
            Services - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Services - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
        <div className="services-main">
          <div className="services-title">
            <span className="services-text">
              <span>SERVICES</span>
              <br></br>
            </span>
          </div>
        </div>
        <BlogCMS rootClassName="blog-cms-root-class-name3"></BlogCMS>
        <Banner rootClassName="banner-root-class-name6"></Banner>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 0px;
          }
          .services-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .services-text {
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
            .services-text {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .services-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
