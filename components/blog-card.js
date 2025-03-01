import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogCard = (props) => {
  return (
    <>
      <div className={`blog-card-blog-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="lazy"
          className="blog-card-image"
        />
        <div className="blog-card-container">
          <button className="blog-card-button button-secondary button">
            {props.button}
          </button>
          <span className="blog-card-text1">{props.text1}</span>
        </div>
        <span className="blog-card-text2">{props.text2}</span>
        <span className="blog-card-text3">{props.text}</span>
      </div>
      <style jsx>
        {`
          .blog-card-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-card-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-card-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .blog-card-text1 {
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
          }
          .blog-card-text3 {
            text-decoration: underline;
          }

          @media (max-width: 1200px) {
            .blog-card-image {
              height: 180px;
            }
            .blog-card-text2 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .blog-cardroot-class-name8 {
              height: auto;
            }
            .blog-cardroot-class-name11 {
              height: auto;
            }
            .blog-cardroot-class-name14 {
              height: auto;
            }
            .blog-cardroot-class-name17 {
              height: auto;
            }
            .blog-cardroot-class-name21 {
              height: auto;
            }
            .blog-cardroot-class-name23 {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .blog-card-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .blog-card-blog-card {
              max-width: 450px;
            }
            .blog-cardroot-class-name {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name3 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name4 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name5 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name6 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name7 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name9 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name10 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name12 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name13 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name15 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name16 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name18 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name19 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name20 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-cardroot-class-name22 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .blog-card-blog-card {
              max-width: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCard.defaultProps = {
  button: 'Web Design',
  imageAlt: 'image',
  text1: 'Dec 8, 2022',
  imageSrc: '/duct_cleaner-1500w.webp',
  rootClassName: '',
  text2: 'Air Duct Cleaning',
  text: 'Read More',
}

BlogCard.propTypes = {
  button: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default BlogCard
