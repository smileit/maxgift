import React, { Component } from 'react';
import Slider from 'react-slick'
import config from './config'

class WhoWeServe extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
    return (
      <div className='who-we-serve-part'>
        <div className='label-part df aic jcc'>
          <span className='line'/>
          <span className='text'>WHO WE SERVE</span>
          <span className='line'/>          
        </div>
        <div className='client-part'>
          <h1 className='main-cl title'>WE MEET THE UNIQUE NEEDS OF UNIQUE CUSTOMERS</h1>
          <div className='list df aic jcc'>
            {
              config.clients.map((c, idx) => <div className='item' key={idx}>
                <img src={`/img/${c.picUrl}`} alt={c.title} />
                <div className='title'>{c.title}</div>
                <div className='text'>{c.text}</div>
              </div>)
            }
          </div>
        </div>
        <div className='comments'>
          <h1 className='title'>HEAR WHAT OUR LOYAL CLIENTS HAVE TO SAY</h1>
          <Slider {...settings} >
            {
              config.comments.map((c, idx) => <div key={idx}>
                <div className='comment-block'>
                  <i className='text'>{`"${c.text}"`}</i>
                  <div className='name'>{c.name}</div>
                </div>
              </div>)
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default WhoWeServe;