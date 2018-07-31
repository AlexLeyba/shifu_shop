import { fetchPhones as fetchPhonesApi, fetchPhoneById as fetchPhoneByIdApi, } from '../api/index'
import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
  ADD_PHONE_TO_BASKET,
  REMOVE_PHONE_FROM_BASKET,
  CLEAN_BASKET
} from '../actionTypes'

export const fetchPhones = () => async dispatch => {
  const phones = await fetchPhonesApi()
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
}

export const fetchPhoneById = (id) => async dispatch => {
  const phone = await fetchPhoneByIdApi(id)
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
}

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const removePhoneFromBasket = id => async dispatch => {
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
}

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  })
}

export const basketCheckout = phones => () => {
  alert(JSON.stringify(phones))
}