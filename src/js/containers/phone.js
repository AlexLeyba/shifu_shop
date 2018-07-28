import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import R from 'ramda'

import { getPhoneById } from '../selectors'
import { fetchPhoneById, addPhoneToBasket } from '../actions/index'
import BasketCart from '../components/basketCart'

class Phone extends Component {
  componentDidMount () {
    this.props.fetchPhoneById(this.props.params.id)
  }

	renderContent () {
	    const {phone} = this.props
	    return (
	      <div className='thumbnail'>
	        <div className='row'>
	          <div className='col-md-4'>
	            <img className='img-thumbnail' src={phone.image} alt={phone.name} />
	          </div>
	          <div className='col-md-8'>
	            	<h1>{phone.name}</h1>
		        	<p>{phone.description}</p>
		        	<h3>${phone.price}</h3>
	          </div>
	        </div>
	      </div>
	    )
	}

	renderSidebar () {
		const {phone, addPhoneToBasket} = this.props
		return (
			<div>
				<p className='lead'>{phone.name} 's Page</p>
				<BasketCart />
				<Link to='/' className='btn btn-info btn-block'>Back to store</Link>
				<button type='button' className='btn btn-success btn-block' onClick={() => addPhoneToBasket(phone.id)}>
					Add to cart
				</button>
			</div>
		)
	}

  render () {
    const {phone} = this.props
    return (
      <div className='view-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {phone && this.renderContent()}
            </div>
            <div className='col-md-3'>
              {phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
