import React, { Component } from 'react';
import Slider from 'react-slick'
import config from './config'

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='banner-part'>
        <Slider autoplay {...settings}>
          {
            config.items.map((item, idx) => <div className='item' key={idx}>
              <img src={`./img/${item.url}`} />
              <div className='title'>{item.title}</div>
              <div className='sub-title'>{item.subTitle}</div>
            </div>)
          }
        </Slider>
      </div>
    );
  }
  
}

export default Banner;