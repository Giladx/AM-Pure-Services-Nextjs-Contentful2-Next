import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagPageInitialProps17d1fResource from '../../resources/tag-page-initial-props-17d1f'

const Tag1 = (props) => {
  return (
    <>
      <div className="tag1-container">
        <Head>
          <title>
            Tag1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Tag1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(TagEntities) => (
                  <>
                    <div className="tag1-container1">
                      <button type="button" className="tag1-button button">
                        {TagEntities?.tagName}
                      </button>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.tagEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tag1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tag1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tag1-button {
            font-size: 12px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            border-width: 1px;
          }
        `}
      </style>
    </>
  )
}

Tag1.defaultProps = {
  tagEntities: [],
}

Tag1.propTypes = {
  tagEntities: PropTypes.array,
}

export default Tag1

export async function getStaticProps(context) {
  try {
    const response = await tagPageInitialProps17d1fResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagEntities: response,
        ...response?.meta,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
