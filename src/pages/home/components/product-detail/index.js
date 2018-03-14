import React, { Component } from 'react';
import Tab from '../../../components/tab'

class Details extends Component {
  render() {
    return (
      <div>
        <Tab>
          <div id='apple'>This is apple</div>
          <div id='bannaner'>This is bannaner</div>
        </Tab>
      </div>
    );
  }
}

export default Details;