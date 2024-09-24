import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import restrictionsResource from '../resources/restrictions'
import restrictions1Resource from '../resources/restrictions1'

const Restrictions = (props) => {
  return (
    <>
      <div className="restrictions-container1">
        <Head>
          <title>
            Restrictions - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Restrictions - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation></Navigation>
        <main className="restrictions-main">
          <div className="restrictions-title">
            <div className="restrictions-title-wrap">
              <span className="restrictions-text100">
                <span>Restrictions</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="restrictions-content">
            <div className="restrictions-content-wrap">
              <span className="restrictions-text103">
                <span>
                  All goods and services are subject to a written agreement
                  between the customer and AM Pure, to be signed when the
                  services are provided.
                </span>
                <br></br>
                <span>
                  ◦ We are committed to full client satisfaction! Before
                  service, you will receive a price quote, only after your
                  approval we will provide our services.
                </span>
                <br></br>
              </span>
              <span className="restrictions-text108">
                <span>100% satisfaction:</span>
                <br></br>
              </span>
              <span className="restrictions-text111">
                <span>
                  If a customer has a complaint about a service performed by AM
                  Pure technician, he needs to allow AM Pure representative to
                  inspect the service.
                </span>
                <br></br>
                <br></br>
                <span>
                  If the customer does not allow an on-site inspection by AM
                  Pure representative, he will not be eligible to take advantage
                  of the 100% satisfaction benefits.
                </span>
                <br></br>
                <br></br>
                <span>
                  Suppose the inspections show the significant bad performance
                  of service provided by an AM Pure technician. The customer
                  will have the right to refund the specific section amount
                  described in the work agreement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="restrictions-text119">
                <span>Additional services:</span>
                <br></br>
              </span>
              <span className="restrictions-text122">
                <span>
                  Additional services refer to services other than the customer
                  ordered by phone with AM Pure representative/dispatcher or any
                  other company who contracted AM Pure for the job.
                </span>
                <br></br>
                <br></br>
                <span>
                  An AM Pure representative on-site may offer additional
                  services according to his discretion. The AM Pure
                  representative on-site will not perform any additional
                  services, free or charged, without the customer&apos;s
                  authorization or the person in charge on-site.
                </span>
                <br></br>
                <br></br>
                <span>
                  The person in charge will be the customer that booked the
                  appointment or someone on his behalf and any person who signed
                  the work agreement.
                </span>
              </span>
              <span className="restrictions-text130">
                <span>&quot;Annual Cleaning&quot; Package and coupon:</span>
                <br></br>
              </span>
              <span className="restrictions-text133">
                <span>
                  The &quot;Annual cleaning&quot; is the package name.
                </span>
                <br></br>
                <br></br>
                <span>
                  The &quot;annual cleaning&quot; package is valid for existing
                  customers who had a thorough cleaning with AM Pure in the past
                  year, and their property is not bigger than 1,200 square feet.
                </span>
                <br></br>
                <br></br>
                <span>
                  Package description and any restrictions will be provided in
                  full by am AM Pure dispatcher when a customer calls to inquire
                  about the package.
                </span>
                <br></br>
              </span>
              <span className="restrictions-text142">
                &quot;Duct Cleaning&quot; Package and coupon:
              </span>
              <span className="restrictions-text143">
                <span>The &quot;duct cleaning&quot; is the package name.</span>
                <br></br>
                <br></br>
                <span>
                  The &quot;duct cleaning&quot; package is considered a basic
                  cleaning by AM Pure standards.
                </span>
                <br></br>
                <br></br>
                <span>
                  The cleaning of the &quot;duct cleaning&quot; package will
                  remove some loose dust and debris starting in the main supply
                  line only.
                </span>
                <br></br>
                <br></br>
                <span>
                  The cleaning of the &quot;duct cleaning&quot; package does not
                  include opening the registers and cleaning individual air
                  ducts in the house area.
                </span>
                <br></br>
                <br></br>
                <span>No guarantee for any results.</span>
                <br></br>
                <br></br>
                <span>
                  Package description and any restrictions will be provided in
                  full by am AM Pure dispatcher when a customer calls to inquire
                  about the package.
                </span>
                <br></br>
                <br></br>
              </span>
              <span className="restrictions-text162">
                <span>Monthly specials on site:</span>
                <br></br>
              </span>
              <span className="restrictions-text165">
                <span>
                  The packages on the monthly specials page on AM Pure website
                  may have restrictions.
                </span>
                <br></br>
                <br></br>
                <span>
                  A representative on the phone will provide restrictions.
                </span>
                <br></br>
                <br></br>
                <span>
                  Monthly special packages and prices may be changed from time
                  to time.
                </span>
              </span>
              <span className="restrictions-text173">
                <span>Certified technician:</span>
                <br></br>
              </span>
              <span className="restrictions-text176">
                <span>
                  AM Pure certified technicians are certified by AM Pure staff
                  according to AM Pure standards.
                </span>
                <br></br>
              </span>
              <span className="restrictions-text179">Insurance:</span>
              <span className="restrictions-text180">
                <span>
                  All AM Pure employees are insured under Michigan workers comp
                  insurance law.
                </span>
                <br></br>
                <br></br>
                <span>
                  AM Pure carries General liability insurance to secure
                  insurance coverage if AM Pure employees on-site damage.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="restrictions-blog">
            <div className="restrictions-container2">
              <span className="restrictions-text185">from blog</span>
              <h2 className="restrictions-text186">
                <span>Our Services</span>
                <br></br>
              </h2>
            </div>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="restrictions-container3">
                    <Repeater
                      items={params}
                      renderItem={(context_7mpc8m) => (
                        <Fragment>
                          <div className="restrictions-blog-cards-container">
                            <Link href={`/post/${context_7mpc8m?.slug}`}>
                              <a className="restrictions-link10">
                                <div className="restrictions-blog-card">
                                  <img
                                    alt="image"
                                    src={context_7mpc8m?.coverImage?.url}
                                    loading="lazy"
                                    className="restrictions-image1"
                                  />
                                  <div className="restrictions-container4">
                                    <div className="restrictions-tags">
                                      <Repeater
                                        items={context_7mpc8m?.tag || []}
                                        renderItem={(context_9oxe3a) => (
                                          <Fragment>
                                            <span className="restrictions-text189">
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
                                    <div className="restrictions-date">
                                      <span className="restrictions-date-time">
                                        <DateTimePrimitive
                                          format="DD/MM/YYYY"
                                          date={context_7mpc8m?.date}
                                        ></DateTimePrimitive>
                                      </span>
                                    </div>
                                  </div>
                                  <span className="restrictions-text191">
                                    {context_7mpc8m?.title}
                                  </span>
                                  <div className="restrictions-container5">
                                    <span>Read More</span>
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      className="restrictions-icon1"
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
              initialData={props.context7mpc8mProp}
              persistDataDuringLoading={true}
            />
          </div>
        </main>
        <Banner rootClassName="bannerroot-class-name2"></Banner>
        <div className="restrictions-footer section-container">
          <div className="restrictions-max-width1 max-content-container">
            <div className="restrictions-top-part">
              <div className="restrictions-links-container">
                <div className="restrictions-product-container">
                  <span className="restrictions-text193">Product</span>
                  <Link href="/monthly-specials">
                    <a className="restrictions-link11">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <Fragment>
                        <div className="restrictions-container6">
                          <Repeater
                            items={params}
                            renderItem={(context_xps4qr) => (
                              <Fragment>
                                <Link href={`/post/${context_xps4qr?.slug}`}>
                                  <a className="restrictions-link12">
                                    {context_xps4qr?.title}
                                  </a>
                                </Link>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    initialData={props.contextXps4qrProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="restrictions-navigate-container">
                <span className="restrictions-text194">Info</span>
                <Link href="/about">
                  <a className="restrictions-link13">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="restrictions-link14">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="restrictions-link15">CONTACT</a>
                </Link>
              </div>
              <div className="restrictions-contact-container">
                <span className="restrictions-text197">Contact Us</span>
                <a href="tel:+18885031722" className="restrictions-link16">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="restrictions-link17"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="restrictions-subscribe-container">
                <span className="restrictions-text198">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="restrictions-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="restrictions-separator"></div>
          <footer className="restrictions-max-width2 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="/logoam-200h.webp"
                  width="150"
                  height="68"
                  className="restrictions-image2"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="restrictions-link19">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="restrictions-link20"
            >
              Developed by 011.ninja
            </a>
          </footer>
          <a
            href="https://bytii.cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="restrictions-signature">
              <span className="restrictions-text199">Bytii Cloud</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .restrictions-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .restrictions-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .restrictions-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .restrictions-title-wrap {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .restrictions-text100 {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .restrictions-content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: 0px;
            justify-content: center;
          }
          .restrictions-content-wrap {
            flex: 0 0 auto;
            width: 768px;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .restrictions-text103 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text108 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text111 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text119 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text122 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text130 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text133 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text142 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text143 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text162 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text165 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text173 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text176 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text179 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text180 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-blog {
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
          .restrictions-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .restrictions-text185 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .restrictions-text186 {
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
          .restrictions-container3 {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .restrictions-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .restrictions-link10 {
            display: contents;
          }
          .restrictions-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .restrictions-image1 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .restrictions-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .restrictions-tags {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .restrictions-text189 {
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
          .restrictions-date {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .restrictions-date-time {
            font-size: 12px;
            text-align: right;
            font-weight: 700;
          }
          .restrictions-text191 {
            font-style: normal;
            font-weight: 600;
          }
          .restrictions-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .restrictions-icon1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .restrictions-footer {
            position: relative;
          }
          .restrictions-max-width1 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .restrictions-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .restrictions-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .restrictions-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .restrictions-text193 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-link11 {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-container6 {
            display: grid;
          }
          .restrictions-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .restrictions-text194 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-link15 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .restrictions-text197 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-link16 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-link17 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .restrictions-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .restrictions-text198 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-textinput {
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
          .restrictions-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .restrictions-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .restrictions-image2 {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .restrictions-link19 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .restrictions-link20 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .restrictions-signature {
            left: 5px;
            bottom: 5px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .restrictions-text199 {
            color: rgb(201, 206, 218);
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 1600px) {
            .restrictions-content-wrap {
              width: 768px;
            }
            .restrictions-container4 {
              width: 100%;
              flex-direction: row;
            }
            .restrictions-tags {
              width: 70%;
              flex-direction: row;
            }
            .restrictions-text189 {
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
            .restrictions-date {
              width: 30%;
              align-items: flex-end;
            }
            .restrictions-date-time {
              font-size: 12px;
              text-align: right;
              font-weight: 700;
            }
            .restrictions-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .restrictions-text100 {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .restrictions-content-wrap {
              width: 768px;
              max-width: auto;
              min-width: auto;
            }
            .restrictions-image1 {
              height: 180px;
            }
            .restrictions-text191 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .restrictions-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .restrictions-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-link16 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .restrictions-link17 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .restrictions-link19 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .restrictions-content-wrap {
              width: 768px;
            }
            .restrictions-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .restrictions-blog-card {
              max-width: 550px;
            }
            .restrictions-link19 {
              text-align: center;
            }
            .restrictions-link20 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .restrictions-text100 {
              font-size: 30px;
            }
            .restrictions-content-wrap {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .restrictions-container3 {
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .restrictions-blog-card {
              max-width: 450px;
            }
            .restrictions-image1 {
              height: auto;
            }
            .restrictions-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .restrictions-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .restrictions-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-link19 {
              text-align: center;
            }
            .restrictions-link20 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .restrictions-text100 {
              font-size: 25px;
            }
            .restrictions-content-wrap {
              width: 100%;
            }
            .restrictions-blog-card {
              max-width: 350px;
            }
            .restrictions-top-part {
              align-items: center;
              flex-direction: column;
            }
            .restrictions-links-container {
              position: relative;
            }
            .restrictions-product-container {
              width: auto;
            }
            .restrictions-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .restrictions-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .restrictions-link17 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-max-width2 {
              flex-direction: column;
            }
            .restrictions-image2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .restrictions-link19 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Restrictions

export async function getStaticProps(context) {
  try {
    const contextXps4qrProp = await restrictions1Resource({
      ...context?.params,
    })
    const context7mpc8mProp = await restrictionsResource({
      ...context?.params,
    })
    return {
      props: {
        contextXps4qrProp: contextXps4qrProp,
        context7mpc8mProp: context7mpc8mProp,
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
