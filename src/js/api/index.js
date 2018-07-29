import R from 'ramda'
import request from 'superagent'

import phones from './mockPhones'

export const fetchPhones = async () => {
  const {body} = await request.get(
    'http://78.140.221.46/api/product-list/?format=json'
  )
  return body
}

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
  })
}
