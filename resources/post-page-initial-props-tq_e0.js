import { normalize } from '@teleporthq/cms-mappers/contentful'

export default async function (params = {}) {
  const urlParams = {
    content_type: 'post',
    ...(params['locale'] && {
      locale: params['locale'],
    }),
    limit: 9,
    skip: 0,
  }
  const data = await fetch(
    `${process.env.CMS_URL}/entries?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
