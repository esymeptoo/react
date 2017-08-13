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
                <div className="headerinner">
                    <span className="site-meta">
                        ESYMEPTOO
                    </span>
                    <button className="header-expand-btn" onClick={this.showMenu.bind(this)}>
                        <span className="header-btn-bar"></span>
                        <span className="header-btn-bar"></span>
                        <span className="header-btn-bar"></span>
                    </button>
                    <div className="header-menu" style={{display: (this.state.menuShow == true)? 'block': 'none'}}>
                        <ul>
                            <li><a href="#/first">爬虫</a></li>
                            <li><a href="#/second">上传</a></li>
                            <li>标签</li>
                        </ul>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Header;