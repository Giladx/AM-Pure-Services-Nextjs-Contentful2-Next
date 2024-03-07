import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import ListContainer from '../components/list-container'
import Packages from '../components/packages'
import AboutUs from '../components/about-us'
import Process from '../components/process'
import Banner from '../components/banner'
import ServiceAreas from '../components/service-areas'
import homeResource from '../resources/home'
import home1Resource from '../resources/home1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name7"></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-heading-container">
                <ListContainer rootClassName="list-container-root-class-name1"></ListContainer>
                <Link href="/monthly-specials">
                  <a className="home-link button-primary button-lg button">
                    MONTHLY SPECIALS
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-stickers">
            <div className="home-sticker-wrap">
              <div className="home-container01">
                <img
                  alt="image"
                  src="/elite-solid-border-500w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-right"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="/soap-solid-border-500w.webp"
                  width="160"
                  height="146"
                  loading="lazy"
                  data-aos="fade-up"
                  className="home-image01"
                />
                <img
                  alt="image"
                  src="/toprated-solid-border-500w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-left"
                  className="home-image02"
                />
              </div>
            </div>
          </div>
          <div className="home-reviews">
            <div className="home-container02">
              <img
                alt="image"
                src="/google-review-logo-200h.webp"
                className="home-image03"
              />
              <div className="home-separator"></div>
            </div>
            <div className="home-container03">
              <div className="home-container04">
                <Script
                  html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div style="height:auto;" class="elfsight-app-022a64ba-bfe8-4981-9894-9414187371fe" data-elfsight-app-lazy></div>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="home-content">
            <div data-aos="fade-up" className="home-image04">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/undraw_absorbed_in_re_ymd6-1500w-1500w.webp"
                loading="lazy"
                srcSet="/undraw_absorbed_in_re_ymd6-1500w-1500w.webp 1200w, /undraw_absorbed_in_re_ymd6-1500w-tablet.webp 800w, /undraw_absorbed_in_re_ymd6-1500w-mobile.webp 480w"
                className="home-image05"
              />
            </div>
            <div data-aos="fade-up" className="home-content-wrap">
              <span className="home-text Heading1">
                <span>AIR DUCT CLEANING</span>
                <br></br>
              </span>
              <span className="home-text03">
                <span>
                  Is essential process to take full advantage of the cooling
                  &amp; heating system.
                </span>
                <br></br>
              </span>
              <span className="home-text06">
                <span>
                  The air ducts and filters must be kept clean. Air ducts and
                  filters accumulate dust, odors and even dust mites which can
                  trigger allergies.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  How can you enjoy a cool interior if it’s causing you to
                  sneeze? When the air ducts or filters are dirty the system
                  works inefficiently and uses extra electricity. After our
                  service, you can breathe easy and enjoy the cool air.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-aos="fade-left" className="home-animation pure"></div>
          <div className="home-content1">
            <div data-aos="fade-right" className="home-content-wrap1">
              <span className="home-text12">
                <span>At AM Pure Services</span>
                <br></br>
              </span>
              <span className="home-text15 Heading1">
                <span>WE AIM TO BE THE BEST FOR YOU</span>
                <br></br>
              </span>
              <span className="home-text18">
                <span>Here are few good reasons why:</span>
                <br></br>
              </span>
              <span className="home-text21">
                <span>AVAILABILITY</span>
                <br className="Heading1"></br>
              </span>
              <span className="home-text24">
                <span>
                  Weekends and same-day appointments, We are ready to deliver
                  our services.
                </span>
                <br></br>
              </span>
              <span className="home-text27">
                <span>PROFESSIONALITY</span>
                <br></br>
              </span>
              <span className="home-text30">
                We train the best and brightest duct cleaning technicians that
                Michigan has to offer. All technicians are certified at AM Pure,
                allowing them to understand the needs of your air ducts.
              </span>
              <span className="home-text31">
                <span>COMPETITIVE</span>
                <br></br>
              </span>
              <span className="home-text34">
                We will beat any competitor prices and service for a limited
                time only!
              </span>
            </div>
            <div className="home-image06">
              <img
                alt="image"
                src="/undraw_all_the_data_h4ki.svg"
                loading="lazy"
                data-aos="fade-left"
                className="home-image07"
              />
            </div>
          </div>
          <Packages></Packages>
          <AboutUs
            imageAlt="am pure services - air duct cleaning"
            imageSrc="https://images.unsplash.com/photo-1592967050810-fb4aa3f8bf9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxNaWNoaWdhbnxlbnwwfHx8fDE2NzgyMDU5NDE&amp;ixlib=rb-4.0.3&amp;w=1000"
            rootClassName="about-us-root-class-name"
          ></AboutUs>
          <Process></Process>
          <div className="home-blog">
            <div className="home-container05">
              <span className="home-text35">from blog</span>
              <h2 className="home-text36">
                <span>Our Services</span>
                <br></br>
              </h2>
            </div>
            <DataProvider
              renderSuccess={(params) => (
                <>
                  <div className="home-container06">
                    <Repeater
                      items={params}
                      renderItem={(context_1m1e3a) => (
                        <>
                          <div className="home-blog-cards-container">
                            <Link href={`/post/${context_1m1e3a?.slug}`}>
                              <a className="home-link01">
                                <div className="home-blog-card">
                                  <img
                                    alt="image"
                                    src={context_1m1e3a?.coverImage?.url}
                                    loading="lazy"
                                    className="home-image08"
                                  />
                                  <div className="home-container07">
                                    <div className="home-tags">
                                      <Repeater
                                        items={context_1m1e3a?.tag || []}
                                        renderItem={(context_9oxe3a) => (
                                          <>
                                            <span className="home-text39">
                                              {context_9oxe3a?.tagName}
                                            </span>
                                          </>
                                        )}
                                        renderEmpty={() => (
                                          <>
                                            <span>Text</span>
                                          </>
                                        )}
                                      />
                                    </div>
                                    <div className="home-date">
                                      <span className="home-date-time">
                                        <DateTimePrimitive
                                          format="DD/MM/YYYY"
                                          date={context_1m1e3a?.date}
                                        ></DateTimePrimitive>
                                      </span>
                                    </div>
                                  </div>
                                  <span className="home-text41">
                                    {context_1m1e3a?.title}
                                  </span>
                                  <div className="home-container08">
                                    <span>Read More</span>
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      className="home-icon"
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
                  </div>
                </>
              )}
              initialData={props.context1m1e3aProp}
              persistDataDuringLoading={true}
            />
          </div>
          <Banner rootClassName="banner-root-class-name"></Banner>
          <ServiceAreas></ServiceAreas>
        </main>
        <div className="home-footer section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-top-part">
              <div className="home-links-container">
                <div className="home-product-container">
                  <span className="home-text43">Product</span>
                  <Link href="/monthly-specials">
                    <a className="home-link02">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <>
                        <div className="home-container09">
                          <Repeater
                            items={params}
                            renderItem={(context_0mvdz) => (
                              <>
                                <span className="home-text44">
                                  {context_0mvdz?.title}
                                </span>
                              </>
                            )}
                          />
                        </div>
                      </>
                    )}
                    initialData={props.context0mvdzProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="home-navigate-container">
                <span className="home-text45">Info</span>
                <Link href="/about">
                  <a className="home-link03">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="home-link04">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="home-link05">CONTACT</a>
                </Link>
              </div>
              <div className="home-contact-container">
                <span className="home-text48">Contact Us</span>
                <a href="tel:+18885031722" className="home-link06">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="home-link07"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="home-subscribe-container">
                <span className="home-text49">Subscribe to our newsletter</span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="home-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="home-separator1"></div>
          <footer className="home-max-width2 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="home-image09"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="home-link09">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            height: 900px;
            position: relative;
            padding-top: 128px;
            background-size: cover;
            background-image: url('/bg2.svg');
          }
          .home-max-width {
            height: 100%;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            margin-bottom: 128px;
            text-decoration: none;
          }
          .home-stickers {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-sticker-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image01 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image02 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-reviews {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-container02 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-image03 {
            width: 180px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-separator {
            width: 200px;
            height: 2px;
            background-color: #595959;
          }
          .home-container03 {
            width: 100%;
            height: 402px;
          }
          .home-container04 {
            display: contents;
          }
          .home-content {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-image04 {
            flex: 0 0 auto;
            width: 50%;
            height: 566px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image05 {
            width: 616px;
            height: 100%;
            align-self: center;
            object-fit: contain;
          }
          .home-content-wrap {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            width: 100%;
            font-style: normal;
          }
          .home-text03 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text06 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-animation {
            height: auto;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-content1 {
            width: 100%;
            height: 820px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .home-content-wrap1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-text15 {
            width: 100%;
            font-style: normal;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text18 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text21 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text24 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text27 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text30 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text31 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text34 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-image06 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .home-image07 {
            width: 100%;
            height: 825px;
            object-fit: fill;
          }
          .home-blog {
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
          .home-container05 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text35 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text36 {
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
          .home-container06 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link01 {
            display: contents;
          }
          .home-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .home-image08 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-tags {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text39 {
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
          .home-date {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-date-time {
            font-size: 12px;
            text-align: right;
            font-weight: 700;
          }
          .home-text41 {
            font-style: normal;
            font-weight: 600;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-footer {
            position: relative;
          }
          .home-max-width1 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text43 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link02 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-container09 {
            display: grid;
          }
          .home-text44 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text45 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text48 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text49 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-textinput {
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
          .home-separator1 {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .home-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image09 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-link09 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .home-link10 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .home-reviews {
              height: 641px;
            }
            .home-container03 {
              height: 421px;
            }
            .home-image05 {
              width: 616px;
              height: 544px;
            }
            .home-content1 {
              height: 790px;
              align-items: center;
              justify-content: center;
            }
            .home-content-wrap1 {
              height: 654px;
            }
            .home-image06 {
              height: 788px;
            }
            .home-image07 {
              height: 820px;
              padding-bottom: 0px;
            }
            .home-container07 {
              width: 100%;
              flex-direction: row;
            }
            .home-tags {
              width: 70%;
              flex-direction: row;
            }
            .home-text39 {
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
            .home-date {
              width: 30%;
              align-items: flex-end;
            }
            .home-date-time {
              font-size: 12px;
              text-align: right;
              font-weight: 700;
            }
            .home-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-link09 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .home-reviews {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-content {
              height: 820px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image04 {
              height: 568px;
            }
            .home-image05 {
              width: 504px;
              height: 452px;
              margin-right: 0px;
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content1 {
              height: auto;
            }
            .home-content-wrap1 {
              height: 802px;
              padding: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .home-text12 {
              font-size: 26px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 70px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .home-text18 {
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .home-image06 {
              height: 816px;
              position: relative;
            }
            .home-image07 {
              height: 796px;
              align-self: center;
            }
            .home-image08 {
              height: 180px;
            }
            .home-text41 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .home-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-link06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link07 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .home-link09 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .home-heading-container {
              width: auto;
              height: auto;
              max-width: auto;
              min-width: auto;
              max-height: auto;
              min-height: auto;
              margin-bottom: 42px;
            }
            .home-reviews {
              height: 664px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container02 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-container03 {
              height: 423px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content {
              height: 807px;
            }
            .home-image05 {
              height: 656px;
            }
            .home-animation {
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image06 {
              height: 960px;
            }
            .home-image07 {
              height: 920px;
              align-self: center;
            }
            .home-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-blog-card {
              max-width: 550px;
            }
            .home-link09 {
              text-align: center;
            }
            .home-link10 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-heading-container {
              width: auto;
              height: 738px;
              padding-bottom: 0px;
            }
            .home-container01 {
              width: 100%;
            }
            .home-image {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image01 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image02 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-reviews {
              height: 660px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content {
              flex-direction: column;
            }
            .home-image04 {
              width: 100%;
              height: auto;
            }
            .home-image05 {
              width: 100%;
              height: var(--dl-size-size-xxlarge);
            }
            .home-content-wrap {
              width: 100%;
            }
            .home-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-animation {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content1 {
              flex-direction: column;
            }
            .home-content-wrap1 {
              width: 100%;
              height: auto;
            }
            .home-text18 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text24 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text30 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text34 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-image06 {
              width: 100%;
              height: auto;
            }
            .home-image07 {
              height: var(--dl-size-size-xxlarge);
            }
            .home-container06 {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-blog-card {
              max-width: 450px;
            }
            .home-image08 {
              height: auto;
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-link09 {
              text-align: center;
            }
            .home-link10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-max-width {
              height: auto;
            }
            .home-heading-container {
              width: auto;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-link {
              margin-bottom: 128px;
            }
            .home-sticker-wrap {
              width: 100%;
            }
            .home-container01 {
              width: 100%;
            }
            .home-image {
              width: 30%;
              height: auto;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-image01 {
              width: 30%;
              height: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-image02 {
              width: 30%;
              height: auto;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-reviews {
              height: 698px;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              height: 415px;
            }
            .home-content {
              height: auto;
            }
            .home-content-wrap {
              width: 100%;
            }
            .home-animation {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-content-wrap1 {
              width: 100%;
            }
            .home-blog-card {
              max-width: 350px;
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-links-container {
              position: relative;
            }
            .home-product-container {
              width: auto;
            }
            .home-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-link07 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-image09 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link09 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  try {
    const context0mvdzProp = await home1Resource({
      ...context?.params,
    })
    if (!context0mvdzProp) {
      return {
        notFound: true,
      }
    }
    const context1m1e3aProp = await homeResource({
      ...context?.params,
    })
    if (!context1m1e3aProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        context0mvdzProp: context0mvdzProp,
        context1m1e3aProp: context1m1e3aProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
