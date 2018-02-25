import React, { Component } from 'react';
import config from './config'

class Fatories extends Component {
  render() {
    return (
      <div className='factory-pics frw aic jcc'>
        {
          config.fatoryPics.map(p => <img key={p.url} src={`/img/${p.url}`} />)
        }
      </div>
    );
  }
}

export default Fatories;