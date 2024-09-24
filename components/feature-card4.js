import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card4-icon1">
          <path d="M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-83.285 139.947-220.416 249.643-275.157 290.091-54.784-40.448-191.872-150.144-275.157-290.091-29.653-49.835-51.669-102.229-61.099-155.563-3.328-18.816-5.077-37.717-5.077-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
        </svg>
        <h2 className="feature-card4-text1">{props.title}</h2>
        <span className="feature-card4-text2">{props.description}</span>
        <span className="feature-card4-text3">{props.description1}</span>
        <span className="feature-card4-text4">{props.description2}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card4-icon1 {
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text1 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text2 {
            color: var(--dl-color-scheme-darkblue);
            font-size: 24px;
            font-style: normal;
            font-weight: 900;
          }
          .feature-card4-text3 {
            color: #999999;
            font-size: 20px;
          }
          .feature-card4-text4 {
            color: #999999;
            font-size: 20px;
          }
          .feature-card4root-class-name {
            width: 100%;
          }

          .feature-card4root-class-name5 {
            max-width: 100%;
          }

          @media (max-width: 479px) {
            .feature-card4-text1 {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  title: 'Lorem ipsum',
  rootClassName: '',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  description2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

FeatureCard4.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
