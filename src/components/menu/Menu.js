import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
    selectPage = (e) => {
        this.props.onPageChange(e)
    }

    render() {
      return (
        <div className="container menu">
            <div className="row">
                <button className="menuItem" onClick={() => this.selectPage("home")}>Home</button>
                <button className="menuItem" onClick={() => this.selectPage("services")}>Services</button>
                <button className="menuItem" onClick={() => this.selectPage("about")}>About</button>
                <button className="menuItem" onClick={() => this.selectPage("contact")}>Contact</button>
                <button className="menuItem" onClick={() => this.selectPage("blog")}>Blog</button>
            </div>
      </div>
      )
    }
}