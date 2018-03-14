import React, { Component } from 'react';
import TitleBlock from '../title_block'
import config from './config'
import { openWindow } from '../../../../utils'

class Products extends Component {
  onItemClick(id) {
    if(!id) return
    this.props.showPopup(id)

  }
  render() {
    return (
      <div className='products-part'>
        <TitleBlock title='WHAT WE OFFER' />
        <div className='title'>OUR PRODUCTS</div>
        <div className='text'>{config.productText}</div>
        <div className='product-box frw aic jcc'>
          {
            config.productList.map((p, idx) => <div key={idx} className='item rel'>
              <img src={`/img/${p.pic}`} />
              <div className='cover abs w-max h-max df aic' onClick={() => this.onItemClick(p.id)}>
                <div className='fx1'>{p.text}</div>
              </div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

Products.defaultProp = {
  showPopup: _ => _
}

export default Products;