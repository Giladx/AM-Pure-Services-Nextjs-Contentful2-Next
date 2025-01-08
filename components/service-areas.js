import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import FeatureCard4 from './feature-card4'

const ServiceAreas = (props) => {
  return (
    <>
      <div className="service-areas-service-areas">
        <div className="service-areas-container1">
          <h1 data-aos="fade-right" className="service-areas-text">
            {props.heading}
          </h1>
          <div data-aos="fade-left" className="service-areas-separator"></div>
        </div>
        <div className="service-areas-container2">
          <div className="service-areas-container3">
            <a href="tel:+13132218518">
              <FeatureCard4
                title="Monroe County "
                description="(313) 221-8518"
                description1=" "
                description2=" "
                rootClassName="rootClassName1"
                className="service-areas-component10"
              ></FeatureCard4>
            </a>
            <a href="tel:+19472190208">
              <FeatureCard4
                title="Oakland County "
                description="(947) 219-0208"
                description1=" Farmington hills - (248) 204-4711"
                description2="West Bloomfield - (248) 817-4297"
                rootClassName="rootClassName5"
                className="service-areas-component11"
              ></FeatureCard4>
            </a>
            <a href="tel:+17348003249">
              <FeatureCard4
                title="Washtenaw County "
                description=" (734) 800-3249"
                description1=" "
                description2=" "
                rootClassName="rootClassName4"
                className="service-areas-component12"
              ></FeatureCard4>
            </a>
            <a href="tel:+13135234027">
              <FeatureCard4
                title="Wayne County "
                description=" (313) 523-4027"
                description1=" "
                description2=" "
                rootClassName="rootClassName3"
                className="service-areas-component13"
              ></FeatureCard4>
            </a>
            <a href="tel:+12482120503">
              <FeatureCard4
                title="Livingston County"
                description="(248) 212-0503"
                description1=" "
                description2=" "
                rootClassName="rootClassName2"
                className="service-areas-component14"
              ></FeatureCard4>
            </a>
            <a href="tel:+15867237907">
              <FeatureCard4
                title="Macomb County"
                description="(586) 723-7907"
                description1=" "
                description2=" "
                rootClassName="rootClassName8"
                className="service-areas-component15"
              ></FeatureCard4>
            </a>
            <a href="tel:+18106710777">
              <FeatureCard4
                title="Genesee County"
                description="(810) 671-0777"
                description1=" "
                description2=" "
                rootClassName="rootClassName9"
                className="service-areas-component16"
              ></FeatureCard4>
            </a>
            <FeatureCard4
              title="Genesee County"
              description="(810) 671-0777"
              description1=" "
              description2=" "
              rootClassName="rootClassName6"
              className="service-areas-component17"
            ></FeatureCard4>
            <FeatureCard4
              title="Genesee County"
              description="(810) 671-0777"
              description1=" "
              description2=" "
              rootClassName="rootClassName7"
              className="service-areas-component18"
            ></FeatureCard4>
            <a href="tel:+15174813849">
              <FeatureCard4
                title="Illinois"
                description="(708)-898-4889"
                description1=" "
                description2=" "
                rootClassName="rootClassName10"
                className="service-areas-component19"
              ></FeatureCard4>
            </a>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            data-aos="fade"
            className="service-areas-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .service-areas-service-areas {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: 100%;
            flex-direction: column;
          }
          .service-areas-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .service-areas-text {
            width: 1368px;
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .service-areas-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .service-areas-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .service-areas-container3 {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .service-areas-component10 {
            text-decoration: none;
          }
          .service-areas-component11 {
            text-decoration: none;
          }
          .service-areas-component12 {
            text-decoration: none;
          }
          .service-areas-component13 {
            text-decoration: none;
          }
          .service-areas-component14 {
            text-decoration: none;
          }
          .service-areas-component15 {
            text-decoration: none;
          }
          .service-areas-component16 {
            text-decoration: none;
          }
          .service-areas-component17 {
            text-decoration: none;
          }
          .service-areas-component18 {
            text-decoration: none;
          }
          .service-areas-component19 {
            text-decoration: none;
          }
          .service-areas-image {
            width: 402px;
            height: 920px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          @media (max-width: 991px) {
            .service-areas-service-areas {
              align-items: center;
            }
            .service-areas-text {
              width: 100%;
            }
            .service-areas-container2 {
              flex-direction: column;
            }
            .service-areas-image {
              width: 100%;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .service-areas-service-areas {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .service-areas-text {
              text-align: center;
            }
            .service-areas-container2 {
              flex-direction: column;
            }
            .service-areas-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .service-areas-service-areas {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .service-areas-container3 {
              grid-template-columns: 1fr;
            }
            .service-areas-image {
              width: 100%;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

ServiceAreas.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1548603613-53d4508a85f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxjYWxsJTIwdXN8ZW58MHx8fHwxNzA5MjAyMDA4fDA&ixlib=rb-4.0.3&w=1500',
  heading: 'Service Areas',
  imageAlt: 'image',
}

ServiceAreas.propTypes = {
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ServiceAreas
