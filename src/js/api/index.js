import R from 'ramda'
import request from 'superagent'

import phones from './mockPhones'

export const fetchPhones = async () => {
  const {body} = await request.get(
    'http://www.mocky.io/v2/5b5ca7dd3200007600426347'
  )
  return body.data
}

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
  })
}
