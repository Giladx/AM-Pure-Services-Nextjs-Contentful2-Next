import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import tagPageInitialPropsTq58Resource from '../../resources/tag-page-initial-props-tq_58'
import tagPageInitialPathsTqU0Resource from '../../resources/tag-page-initial-paths-tq_u0'

const Tag = (props) => {
  return (
    <>
      <div className="tag-container1">
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
            <Fragment>
              <div className="tag-container2">
                <button type="button" className="tag-button button">
                  {TagEntity?.tagName}
                </button>
              </div>
            </Fragment>
          )}
          initialData={props.tagEntity}
          persistDataDuringLoading={true}
          key={props?.tagEntity?.tagName}
        />
      </div>
      <style jsx>
        {`
          .tag-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .tag-container2 {
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
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await tagPageInitialPropsTq58Resource({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        tagEntity: response?.data?.[0],
        ...response?.meta,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await tagPageInitialPathsTqU0Resource({
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
