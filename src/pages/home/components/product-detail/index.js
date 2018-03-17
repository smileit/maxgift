import React, { Component } from 'react';
import Slider from 'react-slick'
import data from './data'
import Tab from '../../../components/tab'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
}
class Details extends Component {
  render() {
    const { id } = this.props
    const productDetail = data.products.find(i => i.id === id)
    if(!id || !productDetail) return null
    const { price, category, title, subTitle, discriptions, packaging_shipping} = productDetail
    return (
      <div className='detail-popup df'>
        <div className='pic-part'>
          <Slider {...settings} key={id}>
            {
              productDetail.pics.map((p, idx) => <div className='item' key={idx}>
              <div className='box df aic'>
                <img src={`/img/${p}`} />
              </div>  
              </div>)
            }
          </Slider>
        </div>
        <div className='fx1 discription'>
          <h3 className='main-cl'>{category}</h3>
          <h1 className='product-title'>{title}</h1>
          <h3 className='sub-title'>{subTitle}</h3>
          <div className='price'>{price}</div>
          <Tab className='d' key={id}>
            <div id='Product Details'>
              <div className='specs'>
                {
                  Object.entries(productDetail.specs).map(([key, val]) => <div key={key}>
                    <span className='blod'>{`${key} :  `}</span>
                    <span className='white'>{val}</span>
                  </div>)
                }
              </div>
            </div>
            <div id='Product Description'>{discriptions}</div>
            <div id='Packaging & Shipping'>{packaging_shipping} </div>
          </Tab>
        </div>
      </div>
    );
  }
}

export default Details;