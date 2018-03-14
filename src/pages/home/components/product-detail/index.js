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
    return (
      <div className='detail-popup df'>
        <div className='pic-part'>
          <Slider {...settings}>
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
          <h3 className='main-cl'>{productDetail.category}</h3>
          <h1 className='product-title'>{productDetail.title}</h1>
          <Tab className='d' key={id}>
            <div id='apple'>This is apple</div>
            <div id='bannaner'>This is bannaner</div>
          </Tab>
        </div>
      </div>
    );
  }
}

export default Details;