//react高阶组件
//工厂函数 封装组件 重复使用
import React, { Component, PropTypes } from 'react'
import WrappedComponent from './WrappedComponent'

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '周小e'
            }
            this.onNameChange = this.onNameChange.bind(this)
        }
        proc(wrappedComponentInstance) {
            wrappedComponentInstance.do()
        }
        onNameChange(event) {
            console.log(event.target.value)
            this.setState({
                name: event.target.value
            })
        }
        render() {
            const newProps = {
                user: 'esymeptoo'
            }
            //通过 refs 访问到实例的方法和实例本身 可实现复用
            const props = Object.assign({}, this.props, { ref: this.proc.bind(this) })
            //可以绑定控件的属性
            const newProps1 = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return (
                <WrappedComponent { ...newProps1 } { ...newProps } />
            )
        }
    }
}

export default new ppHOC(WrappedComponent)