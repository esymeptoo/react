import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  getData = () => {
    this.props.actions.getData();
  }
  render() {
    console.log(this.props.cb.data)
    var imgC;
    imgC = this.props.cb.data.map( item => {
      return (
        <img src={item} alt=""/>
      )
    })
    return (
      <div>
        <button onClick={this.getData.bind(this)}>爬虫</button>
        {imgC}
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
