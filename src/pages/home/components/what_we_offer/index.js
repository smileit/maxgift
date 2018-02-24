import React, { Component } from 'react';
import Expertise from './expertise';
import Products from './products';
import Stories from './stories';
import Fatories from './fatory-pic';


class WhatWeOffer extends Component {
  render() {
    return (
      <div className='what-we-offer'>
        <Products />
        <Expertise />
        <Fatories />
        <Stories />
      </div>
    );
  }
}

export default WhatWeOffer;