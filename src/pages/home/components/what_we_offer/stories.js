import React, { Component } from 'react';
import Slider from 'react-slick'
import config from './config'




class Stories extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <div children='>' className='costom-arrow' />,
      prevArrow: <div children='<' className='costom-arrow' />
    };
    return (
      <div className='story-part text-cl'>
        <h1 className='title main-cl'>THE STORY BEHIND THE STONE</h1>
        <Slider autoplay {...settings}>
          {
            config.stories.map((item, idx) => <div key={idx}>
              <div className='item df aic'>
                <img src={`./img/${item.picUrl}`} alt={item.title} />
                <div className='fx1 detail'>
                  <h2 className='title'>{item.title}</h2>
                  <div className='text'>{item.text}</div>
                </div>
              </div>
            </div>)
          }
        </Slider>
      </div>
    );
  }
}

export default Stories;