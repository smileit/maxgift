import React, { Component } from 'react';
import Slider from 'react-slick'
import data from './data'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};
class Detail extends Component {
  constructor (props) {
    super(props)
    this.id = props.match.params.id
    this.productDetail = data.products.find(i => i.id === this.id)
  }
  render() {
    if(!this.productDetail) return null
    return (
      <div className='detail-page fcw'>
        <div>Title</div>
        <Slider {...settings} className='fx1'>
          {
            this.productDetail.pics.map((p, idx) => <div className='item' key={idx}>
            <div className='box df aic'>
              <img src={`/img/${p}`} />
            </div>  
            </div>)
          }
        </Slider>
      </div>
    );
  }
}

export default Detail;