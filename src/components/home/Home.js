import React, { Component } from 'react';
import background from './background.jpg';
import './Home.css';
import axios from 'axios';

export default class Home extends Component {
    componentDidMount(){
      axios.get(`https://api.cosmicjs.com/v1/architech-website/object/home-body`)
      .then((res) => { 
        this.refs.pageContent.innerHTML = res.data.object.content 
      })
      axios.get(`https://api.cosmicjs.com/v1/architech-website/object/home-header`)
      .then((res) => { 
        this.refs.headerText.innerHTML = res.data.object.content 
      })
    }

    render() {
      return (
        <div>
          <div className="full_width" style={{backgroundImage: `url(${background})`}}>
            <div className="container overImage">
                <div className="row" ref="headerText">
                  {/* <h3>Better Engagement. Better Relationships. Better Business.</h3>
                  <p>Architech believes that nothing beats a friendly smile and a handshake. We'll get you to the smile and handshake.</p> */}
                </div>
            </div>
          </div>
          <br /><br />
          <div className="row" ref="pageContent">
          </div>
        </div>
      )
    }
}