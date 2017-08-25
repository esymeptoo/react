import React, { Component } from 'react'
import HOC from './HOC'
import iiHOC from './iiHOC'
export default class Third extends React.Component {
    render() {
        return (
            <div>
                <HOC />
                <iiHOC />
            </div>
        )
    }
}