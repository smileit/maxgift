import React, { Component } from 'react';
import config from './config';

class Footer extends Component {
  render() {
    return (
      <div className='bg footer-part'>
        <div className='info df'>
          <div className='contact fx1 df col'>
            {
              config.addresss.map((a, idx) => <div className='item' key={idx}>
                <div className='title'>{a.title}</div>
                <div className='text'>{a.add}</div>
                <div className='text'>{a.email}</div>
                <div className='text'>{a.phone}</div>
              </div>)
            }
          </div>
          <div className='link col'>
            <div className='title'>CONNECT</div>
            <div className='social-icons'> <a href="http://www.linkedin.com/in/joyce-han-82a92a128/" target="_blank"><img src={`./img/in.svg`} /></a></div>
          </div>
          <div className='go-top' onClick={this.props.onGoTop}>TOP<span className='arrow-top' /></div>
        </div>
        <div className='copy-right'>© 2018 Maxgift, Inc. All rights reserved.</div>
      </div>
    );
  }
}

export default Footer;