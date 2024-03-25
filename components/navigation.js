import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Navigation = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation-header ${props.rootClassName} `}
      >
        <header data-thq="thq-navbar" className="navigation-navbar-interactive">
          <Link href="/">
            <a className="navigation-link">
              <img
                alt="logo"
                width="150"
                height="68"
                loading="lazy"
                src="/91874469-53be-4f66-8d46-f7f0ad90ccb0no-shadow-200h.webp"
                className="navigation-image"
              />
            </a>
          </Link>
          <a
            href="tel:+18885031722"
            className="navigation-register button-secondary button button-md"
          >
            {props.button11}
          </a>
          <div data-thq="thq-navbar-nav" className="navigation-desktop-menu">
            <NavigationLinks rootClassName="navigation-links-root-class-name8"></NavigationLinks>
            <div className="navigation-buttons">
              <Link href="/campaign">
                <a className="navigation-link1 button-secondary button button-md">
                  {props.button3}
                </a>
              </Link>
              <a
                href="tel:+18885031722"
                className="navigation-register1 button-secondary button button-md"
              >
                {props.button31}
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navigation-mobile-menu">
            <div className="navigation-nav">
              <div className="navigation-top">
                <Link href="/">
                  <a className="navigation-link2">
                    <img
                      id="logo"
                      alt="logo"
                      src="/logoam-200h.webp"
                      width="150"
                      height="68"
                      loading="lazy"
                      className="navigation-image1"
                    />
                  </a>
                </Link>
                <div
                  data-thq="thq-close-menu"
                  className="navigation-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
              <div className="navigation-buttons1">
                <a
                  href="tel:+18885031722"
                  className="navigation-register2 button-secondary button button-md"
                >
                  {props.button111}
                </a>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navigation-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navigation-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="navigation-container1">
              <Script
                html={`<style>
header.inverted {
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 3px 5px 0.3px rgba(0, 0, 0, 0.1);
}
header.inverted a {
  color: #0e436b;
}
</style>

<script>
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

// Nav Elements
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var content = document.getElementById('navsearch');
        if (window.pageYOffset >= content.offsetTop + 60) {
            content.style.filter = 'invert(1)';
        } else {
            content.style.filter = 'invert(0)';
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('navmenu');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var content = document.getElementById('logo');
      if (window.pageYOffset >= content.offsetTop + 60) {
          content.style.filter = 'invert(1)';
      } else {
          content.style.filter = 'invert(0)';
      }
  });
});
</script>`}
              ></Script>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navigation-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .navigation-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-link {
            display: contents;
          }
          .navigation-image {
            width: 160px;
            height: auto;
            text-decoration: none;
          }
          .navigation-register {
            width: auto;
            display: none;
            text-decoration: none;
          }
          .navigation-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }
          .navigation-buttons {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-link1 {
            color: var(--dl-color-scheme-lightgreen);
            width: auto;
            font-size: 14px;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--dl-color-scheme-green);
          }
          .navigation-register1 {
            color: var(--dl-color-scheme-green);
            width: auto;
            font-size: 14px;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navigation-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-link2 {
            display: contents;
          }
          .navigation-image1 {
            width: 150px;
            height: auto;
            text-decoration: none;
          }
          .navigation-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-register2 {
            width: auto;
            display: none;
            text-decoration: none;
          }
          .navigation-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-container1 {
            display: contents;
          }

          .navigation-root-class-name1 {
            display: none;
          }
          .navigation-root-class-name2 {
            display: none;
          }
          .navigation-root-class-name3 {
            top: 0px;
            left: 0px;
          }

          .navigation-root-class-name6 {
            top: 0px;
            left: 0px;
          }
          .navigation-root-class-name7 {
            top: 0px;
            left: 0px;
          }
          .navigation-root-class-name8 {
            top: 0px;
            left: 0px;
          }

          @media (max-width: 1600px) {
            .navigation-image {
              width: 140px;
            }
            .navigation-link1 {
              font-size: 14px;
            }
            .navigation-register1 {
              font-size: 14px;
            }
            .navigation-image1 {
              width: 140px;
            }
          }
          @media (max-width: 1200px) {
            .navigation-link1 {
              font-size: 14px;
            }
            .navigation-register1 {
              font-size: 14px;
            }
          }
          @media (max-width: 991px) {
            .navigation-navbar-interactive {
              min-width: auto;
              justify-content: space-between;
            }
            .navigation-register {
              color: var(--dl-color-scheme-green);
              display: flex;
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation-desktop-menu {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
            }
            .navigation-icon {
              width: 35px;
              height: 35px;
            }
            .navigation-mobile-menu {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .navigation-icon02 {
              width: 35px;
              height: 35px;
            }
            .navigation-register2 {
              color: var(--dl-color-scheme-green);
              display: flex;
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
          }
          @media (max-width: 767px) {
            .navigation-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigation-register {
              font-size: 12px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .navigation-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navigation-register2 {
              font-size: 12px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .navigation-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navigation-image {
              width: 145px;
              height: auto;
            }
            .navigation-register {
              color: var(--dl-color-scheme-green);
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              margin-right: 0px;
              margin-bottom: 0px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation-mobile-menu {
              padding: 16px;
            }
            .navigation-image1 {
              width: 145px;
              height: auto;
            }
            .navigation-register2 {
              color: var(--dl-color-scheme-green);
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              margin-right: 0px;
              margin-bottom: 0px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  button111: 'Get 100$ Free',
  button11: '(888)-503-1722',
  button3: 'Get 100$ off',
  button31: '(888)-503-1722',
  rootClassName: '',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  button: '(888)-503-1722',
  imageAlt1: 'image',
  imageSrc1: '022d6c38-4e96-4be2-af25-3fdc5a3758ea',
  button2: '(888)-503-1722',
  button1: '(888)-503-1722',
}

Navigation.propTypes = {
  button111: PropTypes.string,
  button11: PropTypes.string,
  button3: PropTypes.string,
  button31: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
}

export default Navigation
