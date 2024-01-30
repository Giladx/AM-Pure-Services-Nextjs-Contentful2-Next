import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagPageInitialPaths97c6fResource from '../../../resources/tag-page-initial-paths-97c6f'
import tagPageInitialProps61a21Resource from '../../../resources/tag-page-initial-props-61a21'

const Tag11 = (props) => {
  return (
    <>
      <div className="tag11-container">
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
                    <div className="tag11-container1">
                      <button type="button" className="tag11-button button">
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
          .tag11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tag11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .tag11-button {
            font-size: 12px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            border-width: 1px;
          }
        `}
      </style>
    </>
  )
}

Tag11.defaultProps = {
  tagEntities: [],
}

Tag11.propTypes = {
  tagEntities: PropTypes.array,
}

export default Tag11

export async function getStaticPaths() {
  try {
    const response = await tagPageInitialPaths97c6fResource({
      content_type: 'tag',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await tagPageInitialProps61a21Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
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
