import React, { Component } from 'react';
import './Footer.css';
import facebook from './facebook-logo.png';
import google from './google-logo.png';
import linkedin from './linkedin-logo.png';
import twitter from './twitter-logo.png';
import youtube from './youtube-play-button.png';

export default class Footer extends Component {
    selectPage = (e) => {
        this.props.onPageChange(e)
    }

    render() {
      return (
        <div className="container footer">
            <div className="row">
                <div className="four columns">
                    <ul>
                        <li onClick={() => this.selectPage("home")}>Home</li>
                        <li onClick={() => this.selectPage("services")}>Services</li>
                        <li onClick={() => this.selectPage("about")}>About</li>
                        <li onClick={() => this.selectPage("contact")}>Contact</li>
                        <li onClick={() => this.selectPage("blog")}>Blog</li>
                    </ul>
                </div>
                <div className="offset-by-four four columns">
                    <img className="social" src={facebook} alt="Architech Facebook page"/>
                    <img className="social" src={google} alt="Architech Google+ page"/>
                    <img className="social" src={linkedin} alt="Architech Linkedin page"/>
                    <img className="social" src={twitter} alt="Architech Twitter page"/>
                    <img className="social" src={youtube} alt="Architech Youtube page"/>
                </div>
            </div>
        </div>
      )
    }
}