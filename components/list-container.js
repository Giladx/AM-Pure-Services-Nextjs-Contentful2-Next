import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ListContainer = (props) => {
  return (
    <>
      <div className={`list-container-div ${props.rootClassName} `}>
        <div className="list-container-container1">
          <div className="list-container-container2">
            <Script
              html={`<style>

:root {
  --w: 720;
  --speed: 3s;
}

li{
  list-style:none;
}

.g-container {
  width: 720px;
  height: 136px;
  line-height: 90px;
  background: #ffffff00;
  margin-top: 5em;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  --s:5;
}

ul li {
  flex-shrink: 0;
  width: 720px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  box-sizing: border-box;
}

ul {
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}

ul li {
  /*white-space: nowrap;*/
  cursor: pointer;
  animation: liMove calc(var(--speed)) infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(var(--s) * var(--w) * -1px), 0);
  }
}

@keyframes liMove {
  0% {
    transform: translate(0, 0px);
  }
  80%,
  100%  {
    transform: translate(calc(var(--w) * -1px), 0);
  }
}

@media screen and (max-width: 479px){
  ul li {
  width: 360px;
}

.g-container {
  width: 360px;
  line-height: 60px;
}
:root {
  --w: 360;
}}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="list-container-g-container g-container">
          <ul className="list-container-ul list">
            <li className="list-item">
              <h1 className="list-container-text1">
                WE BELIEVE IN ONE WAY: INTEGRITY
              </h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text2">
                WE CARE FOR PEOPLE HEALTH
              </h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading1">
                WE BELIEVE IN SAVING ENERGY
              </h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading2">
                WE WILL GIVE YOU BEST PERFORMANCE
              </h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-heading3">
                PURE CLEAN AIR DUCT FOR HEALTHY LIFE
              </h1>
            </li>
            <li className="list-item">
              <h1 className="list-container-text3">
                WE BELIEVE IN ONE WAY: INTEGRITY
              </h1>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .list-container-container2 {
            display: contents;
          }
          .list-container-g-container {
            flex: 0 0 auto;
            width: 720px;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .list-container-ul {
            width: 720px;
            align-items: center;
          }
          .list-container-text1 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-text2 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-heading1 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
            padding-bottom: 32px;
          }
          .list-container-heading2 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-heading3 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }
          .list-container-text3 {
            color: var(--dl-color-scheme-green);
            width: 720px;
            padding: var(--dl-space-space-twounits);
            font-size: 5em;
          }

          @media (max-width: 1600px) {
            .list-container-g-container {
              width: 720px;
            }
            .list-container-ul {
              width: 720px;
              align-items: center;
            }
            .list-container-text1 {
              width: 720px;
            }
            .list-container-text2 {
              width: 720px;
            }
            .list-container-heading1 {
              width: 720px;
            }
            .list-container-heading2 {
              width: 720px;
            }
            .list-container-heading3 {
              width: 720px;
            }
            .list-container-text3 {
              width: 720px;
            }
          }
          @media (max-width: 1200px) {
            .list-container-ul {
              align-items: center;
              flex-direction: row;
            }
          }
          @media (max-width: 991px) {
            .list-container-container1 {
              left: NaNpx;
              bottom: 0px;
              position: absolute;
            }
            .list-container-ul {
              flex-direction: row;
            }
            .list-container-text1 {
              font-size: 4.3em;
            }
            .list-container-text2 {
              font-size: 4.3em;
            }
            .list-container-heading1 {
              font-size: 4.3em;
            }
            .list-container-heading2 {
              font-size: 4.3em;
            }
            .list-container-heading3 {
              font-size: 4.3em;
            }
            .list-container-text3 {
              font-size: 4.3em;
            }
          }
          @media (max-width: 767px) {
            .list-container-text1 {
              font-size: 4em;
            }
            .list-container-text2 {
              font-size: 4em;
            }
            .list-container-heading1 {
              font-size: 4em;
            }
            .list-container-heading2 {
              font-size: 4em;
            }
            .list-container-heading3 {
              font-size: 4em;
            }
            .list-container-text3 {
              font-size: 4em;
            }
          }
          @media (max-width: 479px) {
            .list-container-div {
              width: auto;
              justify-content: center;
            }
            .list-container-g-container {
              width: 360px;
            }
            .list-container-ul {
              width: 360px;
            }
            .list-container-text1 {
              width: 360px;
              font-size: 2.1em;
            }
            .list-container-text2 {
              width: 360px;
              font-size: 2.1em;
            }
            .list-container-heading1 {
              width: 360px;
              font-size: 2.1em;
            }
            .list-container-heading2 {
              width: 360px;
              font-size: 2.1em;
            }
            .list-container-heading3 {
              width: 360px;
              font-size: 2.1em;
            }
            .list-container-text3 {
              width: 360px;
              font-size: 2.1em;
            }
          }
        `}
      </style>
    </>
  )
}

ListContainer.defaultProps = {
  rootClassName: '',
}

ListContainer.propTypes = {
  rootClassName: PropTypes.string,
}

export default ListContainer
