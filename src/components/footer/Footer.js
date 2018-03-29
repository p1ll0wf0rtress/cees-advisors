import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from './facebook.svg';
import medium from './medium.svg';
// import linkedin from './linkedin.svg';
import twitter from './twitter.svg';

export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="two columns">
                        <ul>
                            <Link to="/"><li className="footerMenuItem">Home</li></Link>
                            <Link to="/about"><li className="footerMenuItem">Who We Are</li></Link>
                            <Link to="/blog"><li className="footerMenuItem">Blog</li></Link>
                            <Link to="/contact"><li className="footerMenuItem">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="offset-by-nine one columns" style={{textAlign: 'right'}}>
                        <a href="https://www.facebook.com/architechforbusiness/"><img className="social" src={facebook} alt="Architech Facebook page"/></a>
                        {/* <a href="https://twitter.com/ArchitechBiz"><img className="social" src={linkedin} alt="Architech Linkedin page"/></a> */}
                        <a href="https://twitter.com/ArchitechBiz"><img className="social" src={twitter} alt="Architech Twitter page"/></a>
                        <a href="https://medium.com/@architechdata"><img className="social" src={medium} alt="Architech Medium page"/></a>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}