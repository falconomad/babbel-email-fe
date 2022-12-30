import api from '../api'

const generateEmail = async (payload: any) => {
  return api
    .post('/email', payload)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

export default {
  generateEmail,
}
