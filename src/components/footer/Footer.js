import React, { Component } from 'react';
import './Footer.css';
import facebook from './facebook-logo.png';
import google from './google-logo.png';
import linkedin from './linkedin-logo.png';
import twitter from './twitter-logo.png';
// import youtube from './youtube-play-button.png';

export default class Footer extends Component {
    selectPage = (e) => {
        this.props.onPageChange(e)
    }

    render() {
      return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="four columns">
                        <ul>
                            <li><a className="footerMenuItem" onClick={() => this.selectPage("home")}>Home</a></li>
                            <li><a className="footerMenuItem" onClick={() => this.selectPage("Solutions")}>Solutions</a></li>
                            <li><a className="footerMenuItem" onClick={() => this.selectPage("About")}>About</a></li>
                            {/* <li><a className="footerMenuItem" onClick={() => this.selectPage("work")}>Our Work</a></li> */}
                            {/* <li><a className="footerMenuItem" onClick={() => this.selectPage("blog")}>Blog</a></li> */}
                            <li><a className="footerMenuItem" onClick={() => this.selectPage("contact")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="offset-by-four four columns">
                        <img className="social" src={facebook} alt="Architech Facebook page"/>
                        <img className="social" src={google} alt="Architech Google+ page"/>
                        <img className="social" src={linkedin} alt="Architech Linkedin page"/>
                        <img className="social" src={twitter} alt="Architech Twitter page"/>
                        {/* <img className="social" src={youtube} alt="Architech Youtube page"/> */}
                    </div>
                </div>
            </div>
        </div>
      )
    }
}