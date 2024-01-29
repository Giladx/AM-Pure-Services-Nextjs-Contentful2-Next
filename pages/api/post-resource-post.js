import postResource from '../../resources/post'

export default async function handler(req, res) {
  try {
    const response = await postResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
