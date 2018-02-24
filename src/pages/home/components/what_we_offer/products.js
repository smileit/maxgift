import React, { Component } from 'react';
import config from './config'

class Products extends Component {
  render() {
    return (
      <div className='products-part'>
        <div className='tip-part df aic jcc'>
          <div className='line'/>
          <div className='text'>WHAT WE OFFER</div>
          <div className='line'/>
        </div>
        <div className='title'>OUR PRODUCTS</div>
        <div className='text'>{config.productText}</div>
        <div className='product-box frw aic jcc'>
          {
            config.productList.map((p, idx) => <div key={idx} className='item rel'>
              <img src={`/img/${p.pic}`} />
              <div className='cover abs w-max h-max'>{p.text}</div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default Products;