import React, { Component, PropTypes } from 'react'

export default class WrappedComponment extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    do() {
        console.log('>>>')
    }
    render() {
        return (
            <input type="text" name="name" {...this.props.name}/>
        )
    }
}