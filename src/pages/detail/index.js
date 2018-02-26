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
    if(!this.productDetail) return <div className='max-h not-find'>Product Not Found</div>
    const { title, specs, discriptions } = this.productDetail
    return (
      <div className='detail-page fcw'>
        <div>Title</div>
        <div className='fx1 rel'>
          <Slider {...settings}>
            {
              this.productDetail.pics.map((p, idx) => <div className='item' key={idx}>
              <div className='box df aic'>
                <img src={`/img/${p}`} />
              </div>  
              </div>)
            }
          </Slider>
          <div className='abs h-max info-part'>
            <h1 className='title'>{title}</h1>
            <div className='discriptions rel'>
              <div className='btn'>Discriptions <span className='triangle' /></div>
              <div className='abs text'>{discriptions}</div>
            </div>
            <div className='specs'>
              {
                Object.entries(specs).map(([key, val]) => <div key={key}>
                  <span className='blod'>{`${key} :  `}</span>
                  <span>{val}</span>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;