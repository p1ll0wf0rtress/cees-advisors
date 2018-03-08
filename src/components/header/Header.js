import React, { Component } from 'react';
import Menu from '../menu/Menu';
import logo from '../../Logo.png';

export default class Header extends Component {
    render(){
        return(
            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Architech</h1>
                </div>
                <Menu onPageChange={this.handlePageChange}/>
            </header>
        )
    }
}