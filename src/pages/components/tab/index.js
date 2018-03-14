import React, { Component, Children } from 'react';
import classnames from 'classnames'

class Tab extends Component {
  state = {}
  componentWillReceiveProps (nextProps) {
    if(nextProps.key !== this.props.key){
      this.setState({currentTab: null})
    }
  }
  getContent () {
    const { children } = this.props
    const { currentTab } = this.state
    const listChildren = Children.toArray(children)
    return currentTab 
      ? listChildren.find(c => c.props.id === currentTab)
      : listChildren[0]
  }
  changeTab = currentTab => {
    if (currentTab === this.state.changeTab) return
    this.setState({
      currentTab
    })
  }
  render() {
    const { children } = this.props
    const { currentTab } = this.state
    return (
      <div className='tab-cmp'>
        <div className='header df'>
          {
            Children.map(children, ({props: { id }}, idx) => <span
              key={id}
              className={classnames('tab-icon', {active: currentTab === id || (!currentTab && idx === 0)})}
              onClick={() => this.changeTab(id)}
              children={id}
            />)
          }
        </div>
        <div className='content'>
          { this.getContent()}
        </div>
      </div>
    );
  }
}

export default Tab;