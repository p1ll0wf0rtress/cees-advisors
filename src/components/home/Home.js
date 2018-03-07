import React, { Component } from 'react';
import background from './background.jpg';
import './Home.css';
import client from '../../imports/sanityclient';

export default class Home extends Component {
    componentDidMount(){
      client
        .fetch('*[_type == "post" && title == "Home Header"] { body }')
        .then(res => { this.refs.headerText.innerHTML = res[0].body; })
        .catch(err => { console.error('Oh no, error occured: ', err) });
      client
        .fetch('*[_type == "post" && title == "Home Body"] { body }')
        .then(res => { this.refs.pageContent.innerHTML = res[0].body; })
        .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    render() {
      return (
        <div>
          <div className="full_width" style={{backgroundImage: `url(${background})`}}>
            <div className="container overImage">
                <div className="row" ref="headerText">
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