import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Process from '../components/process'
import Banner from '../components/banner'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>
            Contact - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Contact - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigationroot-class-name1"></Navigation>
        <div className="contact-title">
          <div className="contact-title-wrap">
            <span className="contact-text1">
              <span>CONTACT</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="contact-contact-form">
          <div className="contact-container2">
            <div className="contact-container3">
              <Script
                html={`
    <iframe
      id="JotFormIFrame-92946808135466"
      title="Pure Contact"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/92946808135466"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script type="text/javascript">
    var ifr = document.getElementById("JotFormIFrame-92946808135466");
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
          if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
            iframe.style.minHeight = args[1] + "px";
          }
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
        </div>
        <Process
          action1={
            <Fragment>
              <span className="contact-text4">Let&apos;s Get Started</span>
            </Fragment>
          }
          rootClassName="processroot-class-name"
        ></Process>
        <Banner rootClassName="bannerroot-class-name7"></Banner>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: none;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .contact-title-wrap {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-text1 {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .contact-contact-form {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .contact-container2 {
            width: 100%;
            height: 100vh;
            margin-bottom: Infinitypx;
          }
          .contact-container3 {
            display: contents;
          }
          .contact-text4 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .contact-text1 {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
          }
          @media (max-width: 767px) {
            .contact-text1 {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .contact-text1 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact

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
