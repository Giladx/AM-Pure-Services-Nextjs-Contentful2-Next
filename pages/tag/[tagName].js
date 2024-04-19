import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tagPageInitialPropsTqJIResource from '../../resources/tag-page-initial-props-tq_j-i'
import tagPageInitialPathsTqXiResource from '../../resources/tag-page-initial-paths-tq_xi'

const Tag = (props) => {
  return (
    <>
      <div className="tag-container">
        <Head>
          <title>
            Tag - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Tag - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(TagEntity) => (
            <>
              <div className="tag-container1">
                <button type="button" className="tag-button button">
                  {TagEntity?.tagName}
                </button>
              </div>
            </>
          )}
          initialData={props.tagEntity}
          persistDataDuringLoading={true}
          key={props?.tagEntity?.tagName}
        />
      </div>
      <style jsx>
        {`
          .tag-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .tag-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .tag-button {
            width: var(--dl-size-size-xxlarge);
            margin: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            border-width: 1px;
          }
        `}
      </style>
    </>
  )
}

Tag.defaultProps = {
  tagEntity: [],
}

Tag.propTypes = {
  tagEntity: PropTypes.array,
}

export default Tag

export async function getStaticProps(context) {
  try {
    const response = await tagPageInitialPropsTqJIResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tagEntity: response?.data?.[0],
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
    const response = await tagPageInitialPathsTqXiResource({
      content_type: 'tag',
      select: 'fields.tagName',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            tagName: (item?.fields?.tagName).toString(),
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
