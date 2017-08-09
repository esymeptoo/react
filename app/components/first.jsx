import React, { Component, PropTypes } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  jumpToFirst() {
    
  }
  render() {
   
    return (
      <div>
        <button onClick={this.jumpToFirst.bind(this)}></button>
      </div>
    )
  }
}

export default Home
