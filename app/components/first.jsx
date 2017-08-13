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
  componentWillMount() {
    this.getData()
  }
  getData = () => {
    this.props.actions.getData();
  }
  render() {
    var imgC;
    imgC = this.props.cb.data.map( (item, index) => {
      return (
        <div style={{display: 'inline-block', textAlign: 'center', marginBottom: '20px'}} key={index}>
          <img src={item.img} alt="" style={{width: '160px', height: '200px', display: 'inline-block', verticalAlign: 'top', marginLeft: '10px'}}/>
          <p>{item.title}</p>
        </div>
      )
    })
    return (
      <div style={{width: '700px', margin: 'auto'}}>
        <p>知乎热门电影</p>
        <div>
          {imgC}
        </div>
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
