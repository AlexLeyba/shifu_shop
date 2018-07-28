import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {getTotalBasketCount, getTotalBasketPrice} from '../selectors'

const BasketCart = ({totalBasketCount, totalPrice}) => (
      <Link to='/basket' className='btn btn-primary btn-block'>
        <span>{totalBasketCount} item(s) - ${totalPrice}</span>
      </Link>
)

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
}

export default connect(mapStateToProps, null)(BasketCart)
