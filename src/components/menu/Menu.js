import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
    render() {
      return (
        <div className="container menu">
            <div className="row">
                <Link to="/"><button className="menuItem">Home</button></Link>
                <Link to="/solutions"><button className="menuItem">Solutions</button></Link>
                <Link to="/about"><button className="menuItem">About</button></Link>
                <Link to="/contact"><button className="menuItem">Contact</button></Link>
            </div>
      </div>
      )
    }
}