import React from 'react'

import BasketCart from '../components/basketCart'

const Layout = ({children}) => (
    <div className='container view-container'>
        <div className='col-md-2'>
            <BasketCart />
        </div>
        <div className='col-md-10'>
            {children}
        </div>
    </div>
)

export default Layout
