import React, { Component } from 'react';

class TitleBlock extends Component {
  render() {
    const { title, theme } = this.props
    return (
      <div className={`title-block df aic jcc ${theme}`}>
        <span className='line'/>
        <span className='text'>{title}</span>
        <span className='line'/>            
      </div>
    );
  }
}

TitleBlock.defautProps = {
  theme: 'black'
}

export default TitleBlock;