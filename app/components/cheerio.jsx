import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import './first.less'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    console.log('组件已经被加载')
  }
  //组件首次被实例化  首次加载
  componentWillMount() {
    console.log('组件初次被加载')
    this.getData()
  }
  componentDidUpdate() {
    console.log('组件已经被更新')
    console.log('执行瀑布流操作')
  }
  getData = () => {
    this.props.actions.getData();
  }
  render() {
    var imgC;
    imgC = this.props.cb.data.map( (item, index) => {
      return (
        <div className="hot-film-wrapper" style={{display: 'inline-block', textAlign: 'center', marginBottom: '20px', top: 260 * parseInt((index / 4)), left: 200 * (index % 4) }} key={index}>
          <img src={item.img} alt="" style={{width: '160px', height: '200px', display: 'inline-block', verticalAlign: 'top', marginLeft: '10px'}}/>
          <p>{item.title}</p>
        </div>
      )
    })
    return (
      <div style={{width: '700px', margin: 'auto'}}>
        {/* <p>知乎热门电影</p> */}
        <div style={{height: '1000px', position: 'relative'}}>
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
