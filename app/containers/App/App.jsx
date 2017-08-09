import React, { Component, PropTypes } from 'react'
import Header from '../Header/Header'
import './app.less'

export default class App extends Component {
  constructor(props) {
    super(props);
    let headerBarShow = true;
    if (this.props.location.pathname == '/example') {
      headerBarShow = false;
    }
    this.state = {
      headerBarShow: headerBarShow
    }
  }
  shouldComponentUpdate() {
    
  }
  render() { 
    return (
      <div>
        <Header show={this.state.headerBarShow}/>
        <div>{this.props.children}</div>
      </div>
    )
  }
}