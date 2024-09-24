import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorPageInitialPropsTqG8Resource from '../../resources/author-page-initial-props-tq_g8'
import authorPageInitialPathsTqJ7Resource from '../../resources/author-page-initial-paths-tq_j7'

const Author11 = (props) => {
  return (
    <>
      <div className="author11-container1">
        <Head>
          <title>
            Author1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Author1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(AuthorEntity) => (
            <Fragment>
              <div className="author11-container2">
                <h1>{AuthorEntity?.name}</h1>
                <img
                  alt="image"
                  src={AuthorEntity?.picture?.url}
                  className="author11-image"
                />
              </div>
            </Fragment>
          )}
          initialData={props.authorEntity}
          persistDataDuringLoading={true}
          key={props?.authorEntity?.name}
        />
      </div>
      <style jsx>
        {`
          .author11-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .author11-image {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
        `}
      </style>
    </>
  )
}

Author11.defaultProps = {
  authorEntity: [],
}

Author11.propTypes = {
  authorEntity: PropTypes.array,
}

export default Author11

export async function getStaticProps(context) {
  try {
    const response = await authorPageInitialPropsTqG8Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntity: response?.data?.[0],
        ...response?.meta,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await authorPageInitialPathsTqJ7Resource({
      content_type: 'author',
      select: 'fields.name',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            name: (item?.fields?.name).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
