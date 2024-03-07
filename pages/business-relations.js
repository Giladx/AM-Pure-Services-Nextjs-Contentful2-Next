import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import businessRelationsResource from '../resources/business-relations'

const BusinessRelations = (props) => {
  return (
    <>
      <div className="business-relations-container">
        <Head>
          <title>
            Business-Relations - AM Pure Services | Airduct Cleaning | Drayer
            Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Business-Relations - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        <main className="business-relations-main">
          <div className="business-relations-title">
            <div className="business-relations-title-wrap">
              <span className="business-relations-text">
                BUSINESS RELATIONS
              </span>
            </div>
          </div>
          <span className="business-relations-text01">
            <span className="business-relations-text02">
              Want to work with us?
            </span>
            <br className="business-relations-text03"></br>
            <br className="business-relations-text04"></br>
            <span>
              Please leave a message, as short and detailed as you can.
            </span>
            <br className="business-relations-text06"></br>
            <span>
              We will contact you by your preferred contact method if we are
              interested.
            </span>
            <br className="business-relations-text08"></br>
            <span>Thank you!</span>
          </span>
          <div className="business-relations-container1">
            <div className="business-relations-container2">
              <Script
                html={`<iframe id="JotFormIFrame-213542509507454" title="AM Pure Relations Contact Form" onload="window.parent.scrollTo(0,0)"
    allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera"
    src="https://form.jotform.com/213542509507454" frameborder="0" style="
      min-width: 100%;
      height:539px;
      border:none;" scrolling="no">
</iframe>
<script type="text/javascript">
    var ifr = document.getElementById("JotFormIFrame-213542509507454");
      if (ifr) {
        var src = ifr.src;
        var iframeParams = [];
        if (window.location.href && window.location.href.indexOf("?") > -1) {
          iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
        }
        if (src && src.indexOf("?") > -1) {
          iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
          src = src.substr(0, src.indexOf("?"))
        }
        iframeParams.push("isIframeEmbed=1");
        ifr.src = src + "?" + iframeParams.join('&');
      }
      window.handleIFrameMessage = function(e) {
        if (typeof e.data === 'object') { return; }
        var args = e.data.split(":");
        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
        if (!iframe) { return; }
        switch (args[0]) {
          case "scrollIntoView":
            iframe.scrollIntoView();
            break;
          case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
          case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
              iframe.style.height = window.innerHeight + "px";
            }
            break;
          case "reloadPage":
            window.location.reload();
            break;
          case "loadScript":
            if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
            var src = args[1];
            if (args.length > 3) {
                src = args[1] + ':' + args[2];
            }
            var script = document.createElement('script');
            script.src = src;
            script.type = 'text/javascript';
            document.body.appendChild(script);
            break;
          case "exitFullscreen":
            if      (window.document.exitFullscreen)        window.document.exitFullscreen();
            else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
            else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
            else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
            else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
            break;
        }
        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
        if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
          var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
          iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
        }
      };
      window.isPermitted = function(originUrl, whitelisted_domains) {
        var url = document.createElement('a');
        url.href = originUrl;
        var hostname = url.hostname;
        var result = false;
        if( typeof hostname !== 'undefined' ) {
          whitelisted_domains.forEach(function(element) {
              if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                  result = true;
              }
          });
          return result;
        }
      };
      if (window.addEventListener) {
        window.addEventListener("message", handleIFrameMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleIFrameMessage);
      }
</script>`}
              ></Script>
            </div>
          </div>
          <Banner rootClassName="banner-root-class-name4"></Banner>
        </main>
        <div className="business-relations-footer section-container">
          <div className="business-relations-max-width max-content-container">
            <div className="business-relations-top-part">
              <div className="business-relations-links-container">
                <div className="business-relations-product-container">
                  <span className="business-relations-text10">Product</span>
                  <Link href="/monthly-specials">
                    <a className="business-relations-link">MONTHLY SPECIALS</a>
                  </Link>
                  <DataProvider
                    renderSuccess={(params) => (
                      <>
                        <div className="business-relations-container3">
                          <Repeater
                            items={params}
                            renderItem={(context_i5k88b) => (
                              <>
                                <span className="business-relations-text11">
                                  {context_i5k88b?.title}
                                </span>
                              </>
                            )}
                          />
                        </div>
                      </>
                    )}
                    initialData={props.contextI5k88bProp}
                    persistDataDuringLoading={true}
                  />
                </div>
              </div>
              <div className="business-relations-navigate-container">
                <span className="business-relations-text12">Info</span>
                <Link href="/about">
                  <a className="business-relations-link1">
                    <span>ABOUT</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/restrictions">
                  <a className="business-relations-link2">RESTRICTIONS</a>
                </Link>
                <Link href="/contact">
                  <a className="business-relations-link3">CONTACT</a>
                </Link>
              </div>
              <div className="business-relations-contact-container">
                <span className="business-relations-text15">Contact Us</span>
                <a href="tel:+18885031722" className="business-relations-link4">
                  (888) 503-1722
                </a>
                <a
                  href="mailto:service@ampureservices.com?subject=Site Service Request"
                  className="business-relations-link5"
                >
                  SERVICE@AMPURESERVICES.COM
                </a>
              </div>
              <div className="business-relations-subscribe-container">
                <span className="business-relations-text16">
                  Subscribe to our newsletter
                </span>
                <input
                  type="text"
                  id="newsletter"
                  placeholder="Enter your e-mail address"
                  className="business-relations-textinput input"
                />
                <button className="button-primary button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="business-relations-separator"></div>
          <footer className="business-relations-max-width1 max-content-container">
            <Link href="/">
              <a>
                <img
                  alt="image"
                  src="20769734-2b37-4566-8316-77ad864b1180"
                  width="150"
                  height="68"
                  className="business-relations-image"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="business-relations-link7">
                All rights reserved @ AM Pure Services
              </a>
            </Link>
            <a
              href="https://011.ninja/bio"
              target="_blank"
              rel="noreferrer noopener"
              className="business-relations-link8"
            >
              Developed by 011.ninja
            </a>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .business-relations-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .business-relations-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .business-relations-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .business-relations-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .business-relations-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .business-relations-text01 {
            width: 768px;
            font-size: 26px;
            align-self: center;
            text-align: left;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .business-relations-text02 {
            font-weight: 700;
          }
          .business-relations-container1 {
            width: 100%;
          }
          .business-relations-container2 {
            display: contents;
          }
          .business-relations-footer {
            position: relative;
          }
          .business-relations-max-width {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .business-relations-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .business-relations-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .business-relations-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .business-relations-text10 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .business-relations-link {
            color: var(--dl-color-scheme-darkblue);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-container3 {
            display: grid;
          }
          .business-relations-text11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .business-relations-text12 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .business-relations-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .business-relations-text15 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .business-relations-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .business-relations-link5 {
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .business-relations-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .business-relations-text16 {
            color: var(--dl-color-scheme-green);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .business-relations-textinput {
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
          .business-relations-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .business-relations-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .business-relations-image {
            width: 150px;
            object-fit: cover;
            text-decoration: none;
          }
          .business-relations-link7 {
            width: auto;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            text-decoration: none;
          }
          .business-relations-link8 {
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .business-relations-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-link7 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .business-relations-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .business-relations-text01 {
              font-size: 26px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .business-relations-text02 {
              font-weight: 700;
            }
            .business-relations-text03 {
              font-weight: 700;
            }
            .business-relations-text04 {
              font-weight: 700;
            }
            .business-relations-text06 {
              font-weight: 700;
            }
            .business-relations-text08 {
              font-weight: 700;
            }
            .business-relations-max-width {
              padding-left: 0px;
              padding-right: 0px;
            }
            .business-relations-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-link4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .business-relations-link5 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .business-relations-link7 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .business-relations-link7 {
              text-align: center;
            }
            .business-relations-link8 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .business-relations-text {
              font-size: 30px;
            }
            .business-relations-text01 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .business-relations-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .business-relations-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .business-relations-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-link7 {
              text-align: center;
            }
            .business-relations-link8 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .business-relations-text {
              font-size: 25px;
            }
            .business-relations-text01 {
              font-size: 16px;
            }
            .business-relations-top-part {
              align-items: center;
              flex-direction: column;
            }
            .business-relations-links-container {
              position: relative;
            }
            .business-relations-product-container {
              width: auto;
            }
            .business-relations-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .business-relations-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .business-relations-link5 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .business-relations-max-width1 {
              flex-direction: column;
            }
            .business-relations-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .business-relations-link7 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default BusinessRelations

export async function getStaticProps(context) {
  try {
    const contextI5k88bProp = await businessRelationsResource({
      ...context?.params,
    })
    if (!contextI5k88bProp) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextI5k88bProp: contextI5k88bProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
