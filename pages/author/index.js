import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorPageInitialPropsFc97eResource from '../../resources/author-page-initial-props-fc97e'

const Author = (props) => {
  return (
    <>
      <div className="author-container">
        <Head>
          <title>
            Author - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Author - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
                renderItem={(AuthorEntities) => (
                  <>
                    <div className="author-container1">
                      <h1>{AuthorEntities?.name}</h1>
                      <img
                        alt={AuthorEntities?.picture?.name}
                        src={AuthorEntities?.picture?.url}
                        className="author-image"
                      />
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.authorEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .author-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .author-image {
            width: auto;
            height: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
        `}
      </style>
    </>
  )
}

Author.defaultProps = {
  authorEntities: [],
}

Author.propTypes = {
  authorEntities: PropTypes.array,
}

export default Author

export async function getStaticProps(context) {
  try {
    const response = await authorPageInitialPropsFc97eResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntities: response,
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
