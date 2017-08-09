import React, { Component } from 'react';
import './header.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: true
        }
    }
    showMenu () {
        this.setState({
            menuShow: !this.state.menuShow
        })
    }
    render() {
        return (
            <div className="headerContainer" style={{display: (this.props.show == false ? 'none': 'block')}}>
                <p className="headerinner">
                    <span className="site-meta">
                        ESYMEPTOO
                    </span>
                    <button className="header-expand-btn" onClick={this.showMenu.bind(this)}>
                        <span className="header-btn-bar"></span>
                        <span className="header-btn-bar"></span>
                        <span className="header-btn-bar"></span>
                    </button>
                    <p className="header-menu" style={{display: (this.state.menuShow == true)? 'block': 'none'}}>
                        <ul>
                            <li>首页</li>
                            <li>归档</li>
                            <li>关于</li>
                            <li>分类</li>
                        </ul>
                    </p> 
                </p>
            </div>
        )
    }
}

export default Header;