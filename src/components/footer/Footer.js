import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
// import twitter from './twitter.svg';

export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="two columns">
                        <ul>
                            <Link to="/"><li className="footerMenuItem">Home</li></Link>
                            <Link to="/services"><li className="footerMenuItem">Solutions</li></Link>
                            <Link to="/about"><li className="footerMenuItem">About</li></Link>
                            <Link to="/blog"><li className="footerMenuItem">Blog</li></Link>
                            <Link to="/contact"><li className="footerMenuItem">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="offset-by-six four columns social_container">
                        <a href="https://linkedin.com/company/competitive-edge-energy-solutions"><img className="social" src={linkedin} alt="CEES LinkedIn page"/></a>
                        {/* <a href=""><img className="social" src={twitter} alt="CEES Twitter page"/></a> */}
                        <a href="https://facebook.com/competitive-edge-energy-solutions"><img className="social" src={facebook} alt="CEES Facebook page"/></a>
                        {/* <a href="https://medium.com/@architechdata"><img className="social" src={medium} alt="CEES Medium page"/></a> */}
                    </div>
                </div>
            </div>
        </div>
      )
    }
}