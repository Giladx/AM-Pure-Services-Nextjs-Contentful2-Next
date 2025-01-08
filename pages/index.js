import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import Hero10 from '../components/hero10'
import Navigation from '../components/navigation'
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
      <div className="home-container10">
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
        <Hero10
          action1={
            <Fragment>
              <span className="home-text10">Monthly Specials</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text11">Call Us Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text12">
                <span>
                  Our certified technicians trained at AM Pure provide
                  top-quality air duct cleaning services in Michigan. We offer
                  competitive pricing, monthly specials, and easy appointment
                  scheduling. Check out our blog posts on the importance of air
                  duct cleaning to learn more!
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text16">
                <span>AM Pure Services </span>
                <br></br>
                <span>
                  {' '}
                  Professional Air Duct Cleaning
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Michigan &amp; Illinois</span>
              </span>
            </Fragment>
          }
          buttonUrl="/monthly-specials"
          image1Alt="Air Duct"
          buttonUrl1="https://tel:8885031722"
          rootClassName="hero10root-class-name"
          image1Src="/photo-new-800w.webp"
          imageSrc="/photo-new-800w.webp"
          imageSrc1="/photo-new-800w.webp"
        ></Hero10>
        <Navigation
          button31="(888)-503-1722"
          rootClassName="navigationroot-class-name7"
        ></Navigation>
        <main className="home-main">
          <div className="home-stickers">
            <div className="home-sticker-wrap">
              <div className="home-container11">
                <img
                  alt="image"
                  src="/elite-solid-border-500w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-right"
                  className="home-image10"
                />
                <img
                  alt="image"
                  src="/soap-solid-border-500w.webp"
                  width="160"
                  height="146"
                  loading="lazy"
                  data-aos="fade-up"
                  className="home-image11"
                />
                <img
                  alt="image"
                  src="/toprated-solid-border-500w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-left"
                  className="home-image12"
                />
              </div>
            </div>
          </div>
          <div className="home-reviews">
            <div className="home-container12">
              <img
                alt="image"
                src="/google-review-logo-200h.webp"
                className="home-image13"
              />
              <div className="home-separator1"></div>
            </div>
            <div className="home-container13">
              <div className="home-container14">
                <Script
                  html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div style="height:auto;" class="elfsight-app-022a64ba-bfe8-4981-9894-9414187371fe" data-elfsight-app-lazy></div>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="home-content1">
            <div data-aos="fade-up" className="home-image14">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/undraw_absorbed_in_re_ymd6-1500w-1500w.webp"
                loading="lazy"
                srcSet="/undraw_absorbed_in_re_ymd6-1500w-1500w.webp 1200w, /undraw_absorbed_in_re_ymd6-1500w-tablet.webp 800w, /undraw_absorbed_in_re_ymd6-1500w-mobile.webp 480w"
                className="home-image15"
              />
            </div>
            <div data-aos="fade-up" className="home-content-wrap1">
              <span className="home-text22 Heading1">
                <span>AIR DUCT CLEANING</span>
                <br></br>
              </span>
              <span className="home-text25">
                <span>
                  Is essential process to take full advantage of the cooling
                  &amp; heating system.
                </span>
                <br></br>
              </span>
              <span className="home-text28">
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
              <a
                href="tel:+18885031722"
                className="home-button1 thq-button-filled"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-action11">Call Us Now</span>
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="home-animation pure"></div>
          <div className="home-content2">
            <div data-aos="fade-right" className="home-content-wrap2">
              <span className="home-text34">
                <span>At AM Pure Services</span>
                <br></br>
              </span>
              <span className="home-text37 Heading1">
                <span>WE AIM TO BE THE BEST FOR YOU</span>
                <br></br>
              </span>
              <span className="home-text40">
                <span>Here are few good reasons why:</span>
                <br></br>
              </span>
              <span className="home-text43">
                <span>AVAILABILITY</span>
                <br className="Heading1"></br>
              </span>
              <span className="home-text46">
                <span>
                  Weekends and same-day appointments, We are ready to deliver
                  our services.
                </span>
                <br></br>
              </span>
              <span className="home-text49">
                <span>PROFESSIONALITY</span>
                <br></br>
              </span>
              <span className="home-text52">
                We train the best and brightest duct cleaning technicians that
                Michigan has to offer. All technicians are certified at AM Pure,
                allowing them to understand the needs of your air ducts.
              </span>
              <span className="home-text53">
                <span>COMPETITIVE</span>
                <br></br>
              </span>
              <span className="home-text56">
                We will beat any competitor prices and service for a limited
                time only!
              </span>
              <a
                href="tel:+18885031722"
                className="home-button2 thq-button-filled"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-action12">Call Us Now</span>
              </a>
            </div>
            <div className="home-image16">
              <img
                alt="image"
                src="/undraw_all_the_data_h4ki.svg"
                loading="lazy"
                data-aos="fade-left"
                className="home-image17"
              />
            </div>
          </div>
          <Packages></Packages>
          <AboutUs
            action1={
              <Fragment>
                <span className="home-text57">Call Us Now</span>
              </Fragment>
            }
            imageAlt="am pure services - air duct cleaning"
            imageSrc="https://images.unsplash.com/photo-1592967050810-fb4aa3f8bf9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxNaWNoaWdhbnxlbnwwfHx8fDE2NzgyMDU5NDE&amp;ixlib=rb-4.0.3&amp;w=1000"
            rootClassName="about-usroot-class-name"
          ></AboutUs>
          <Process
            action1={
              <Fragment>
                <span className="home-text58">Let&apos;s Get Started</span>
              </Fragment>
            }
          ></Process>
          <div className="home-blog">
            <div className="home-container15">
              <span className="home-text59">from blog</span>
              <h2 className="home-text60">
                <span>Our Services</span>
                <br></br>
              </h2>
            </div>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="home-container16">
                    <Repeater
                      items={params}
                      renderItem={(context_1m1e3a) => (
                        <Fragment>
                          <div className="home-blog-cards-container">
                            <Link href={`/post/${context_1m1e3a?.slug}`}>
                              <a className="home-link10">
                                <div className="home-blog-card">
                                  <img
                                    alt="image"
                                    src={context_1m1e3a?.coverImage?.url}
                                    loading="lazy"
                                    className="home-image18"
                                  />
                                  <div className="home-container17">
                                    <div className="home-tags">
                                      <Repeater
                                        items={context_1m1e3a?.tag || []}
                                        renderItem={(context_9oxe3a) => (
                                          <Fragment>
                                            <span className="home-text63">
                                              {context_9oxe3a?.tagName}
                                            </span>
                                          </Fragment>
                                        )}
                                        renderEmpty={() => (
                                          <Fragment>
                                            <span>Text</span>
                                          </Fragment>
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
                                  <span className="home-text65">
                                    {context_1m1e3a?.title}
                                  </span>
                                  <div className="home-container18">
                                    <span>Read More</span>
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      className="home-icon5"
                                    >
                                      <path d="M810 298h86v256h-648l154 154-60 60-256-256 256-256 60 60-154 154h562v-172z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              initialData={props.context1m1e3aProp}
              persistDataDuringLoading={true}
            />
          </div>
          <Banner rootClassName="bannerroot-class-name24"></Banner>
          <ServiceAreas></ServiceAreas>
        </main>
        <div className="home-footer section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-top-part">
              <div className="home-links-container">
                <div className="home-product-container">
                  <span className="home-text67">Product</span>
                  <Link href="/monthly-specials">
                    <a className="home-link11">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <Fragment>
                        <div className="home-container19">
                          <Repeater
                            items={params}
                            renderItem={(context_0mvdz) => (
                              <Fragment>
                                <Link href={`/post/${context_0mvdz?.slug}`}>
                                  <a className="home-link12">
                                    {context_0mvdz?.title}
                                  </a>
                                </Link>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    initialData={props.context0mvdzProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="home-navigate-container">
                <span className="home-text68">Info</span>
                <Link href="/about">
                  <a className="home-link13">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="home-link14">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="home-link15">CONTACT</a>
                </Link>
              </div>
              <div className="home-contact-container">
                <span className="home-text71">Contact Us</span>
                <a href="tel:+18885031722" className="home-link16">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="home-link17"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="home-subscribe-container">
                <span className="home-text72">Subscribe to our newsletter</span>
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
          <div className="home-separator2"></div>
          <footer className="home-max-width2 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="/logoam-200h.webp"
                  width="150"
                  height="68"
                  className="home-image19"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="home-link19">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link20"
            >
              Developed by 011.ninja
            </a>
          </footer>
          <a
            href="https://bytii.cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-signature">
              <span className="home-text73">Bytii Cloud</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-stickers {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 50px;
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
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image10 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image11 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image12 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-reviews {
            width: 100%;
            height: 644px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-container12 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-image13 {
            width: 180px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-separator1 {
            width: 200px;
            height: 2px;
            background-color: #595959;
          }
          .home-container13 {
            width: 100%;
            height: 539px;
          }
          .home-container14 {
            display: contents;
          }
          .home-content1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-image14 {
            flex: 0 0 auto;
            width: 50%;
            height: 566px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image15 {
            width: 616px;
            height: 100%;
            align-self: center;
            object-fit: contain;
          }
          .home-content-wrap1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text22 {
            width: 100%;
            font-style: normal;
          }
          .home-text25 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text28 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-button1 {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            width: 100%;
            margin-top: var(--dl-space-space-oneandhalfunits);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .home-action11 {
            text-transform: uppercase;
          }
          .home-animation {
            height: auto;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-content2 {
            width: 100%;
            height: 860px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .home-content-wrap2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text34 {
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
          .home-text37 {
            width: 100%;
            font-style: normal;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text40 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text43 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text46 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text49 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text52 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text53 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text56 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-button2 {
            fill: var(--dl-color-scheme-green);
            color: var(--dl-color-scheme-green);
            width: 100%;
            margin-top: var(--dl-space-space-oneandhalfunits);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-scheme-green);
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .home-action12 {
            text-transform: uppercase;
          }
          .home-image16 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .home-image17 {
            width: 100%;
            height: 860px;
            object-fit: fill;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
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
          .home-container15 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text59 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text60 {
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
          .home-container16 {
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
          .home-link10 {
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
          .home-image18 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-container17 {
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
          .home-text63 {
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
          .home-text65 {
            font-style: normal;
            font-weight: 600;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-icon5 {
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
          .home-text67 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link11 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-container19 {
            display: grid;
          }
          .home-link12 {
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
          .home-text68 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15 {
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
          .home-text71 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link17 {
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
          .home-text72 {
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
          .home-separator2 {
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
          .home-image19 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-link19 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .home-link20 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .home-signature {
            left: 5px;
            bottom: 5px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .home-text73 {
            color: rgb(201, 206, 218);
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 1600px) {
            .home-reviews {
              height: 662px;
            }
            .home-container13 {
              height: 537px;
            }
            .home-image15 {
              width: 616px;
              height: 544px;
            }
            .home-content2 {
              height: 790px;
              align-items: center;
              justify-content: center;
            }
            .home-content-wrap2 {
              height: 654px;
            }
            .home-image16 {
              height: 788px;
            }
            .home-image17 {
              height: 820px;
              padding-bottom: 0px;
            }
            .home-container17 {
              width: 100%;
              flex-direction: row;
            }
            .home-tags {
              width: 70%;
              flex-direction: row;
            }
            .home-text63 {
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
            .home-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .home-reviews {
              height: 591px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-content1 {
              height: 820px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image14 {
              height: 568px;
            }
            .home-image15 {
              width: 504px;
              height: 452px;
              margin-right: 0px;
            }
            .home-text25 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content2 {
              height: auto;
            }
            .home-content-wrap2 {
              height: 802px;
              padding: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .home-text34 {
              font-size: 26px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 70px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .home-text40 {
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .home-image16 {
              height: 816px;
              position: relative;
            }
            .home-image17 {
              height: 796px;
              align-self: center;
            }
            .home-image18 {
              height: 180px;
            }
            .home-text65 {
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
            .home-link16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link17 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .home-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .home-reviews {
              height: 617px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container12 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-container13 {
              height: 423px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content1 {
              height: 807px;
            }
            .home-image15 {
              height: 656px;
            }
            .home-animation {
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image16 {
              height: 960px;
            }
            .home-image17 {
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
            .home-link19 {
              text-align: center;
            }
            .home-link20 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-container11 {
              width: 100%;
            }
            .home-image10 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image11 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image12 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-reviews {
              height: 636px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content1 {
              flex-direction: column;
            }
            .home-image14 {
              width: 100%;
              height: auto;
            }
            .home-image15 {
              width: 100%;
              height: var(--dl-size-size-xxlarge);
            }
            .home-content-wrap1 {
              width: 100%;
            }
            .home-text22 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text25 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-animation {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content2 {
              flex-direction: column;
            }
            .home-content-wrap2 {
              width: 100%;
              height: auto;
            }
            .home-text40 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text46 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text52 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text56 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-image16 {
              width: 100%;
              height: auto;
            }
            .home-image17 {
              height: var(--dl-size-size-xxlarge);
            }
            .home-container16 {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-blog-card {
              max-width: 450px;
            }
            .home-image18 {
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
            .home-link19 {
              text-align: center;
            }
            .home-link20 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-sticker-wrap {
              width: 100%;
            }
            .home-container11 {
              width: 100%;
            }
            .home-image10 {
              width: 30%;
              height: auto;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-image11 {
              width: 30%;
              height: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-image12 {
              width: 30%;
              height: auto;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-reviews {
              height: 650px;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container13 {
              height: 415px;
            }
            .home-content1 {
              height: auto;
            }
            .home-content-wrap1 {
              width: 100%;
            }
            .home-button1 {
              width: 100%;
            }
            .home-animation {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-content-wrap2 {
              width: 100%;
            }
            .home-button2 {
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
            .home-link17 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-image19 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link19 {
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
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const context0mvdzProp = await home1Resource({
      ...context?.params,
    })
    const context1m1e3aProp = await homeResource({
      ...context?.params,
    })
    return {
      props: {
        messages,
        context0mvdzProp: context0mvdzProp,
        context1m1e3aProp: context1m1e3aProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
    }
  }
}
