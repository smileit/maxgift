import React, { Component } from 'react';
import Slider from 'react-slick'
import config from './config'
import './style.less'


class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='banner-part'>
        <Slider {...settings} arrows>
          {
            config.items.map(item => <div className='item'>
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