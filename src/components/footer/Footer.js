import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from './facebook-logo.png';
// eslint-disable-next-line
import google from './google-logo.png';
import linkedin from './linkedin-logo.png';
import twitter from './twitter-logo.png';
// import youtube from './youtube-play-button.png';

export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="two columns offset-by-one">
                        <ul>
                            <Link to="/"><li className="footerMenuItem">Home</li></Link>
                            <Link to="/about"><li className="footerMenuItem">Who We Are</li></Link>
                            <a href="https://medium.com/@architechdata"><li className="footerMenuItem">Blog</li></a>
                            <Link to="/contact"><li className="footerMenuItem">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="offset-by-five four columns" style={{textAlign: 'right'}}>
                        <a href="https://www.facebook.com/architechforbusiness/"><img className="social" src={facebook} alt="Architech Facebook page"/></a>
                        <a href="https://twitter.com/ArchitechBiz"><img className="social" src={linkedin} alt="Architech Linkedin page"/></a>
                        <a href=""><img className="social" src={twitter} alt="Architech Twitter page"/></a>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}