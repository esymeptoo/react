import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Remarkable from 'remarkable'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  jumpToFirst = () => {
    this.props.actions.testFirst(2)
  }
  render() {
    var md = new Remarkable();
    return (
      <div>
        <span ref="me">{this.props.cb.text}</span><br/>
        <button onClick={this.jumpToFirst.bind(this)}>+1</button>
        {/* <div className='comment'>{md.render(this.props.children.toString())} </div> */}
      </div>
    )
  }
}
//桥接store
const mapStateToProps = state => ({
  cb: state.First
})
//桥接actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
