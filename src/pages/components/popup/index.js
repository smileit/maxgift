import React, { Component } from 'react';
import classnames from 'classnames'

class Popup extends Component {
  state = {
    show: false
  }

  show () {
    this.setState({
      show: true
    })
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  render() {
    const { children } = this.props
    return (
      <div className={classnames('popup-container df jcr aic', {hidden: !this.state.show})}>
        <div className='cover abs w-max h-max' />
        <div className='popup-body rel'>
          <div
            className='close-icon abs'
            children='x'
            onClick={this.close}
          />
          {
            children
          }
        </div>
      </div>
    );
  }
}

export default Popup;