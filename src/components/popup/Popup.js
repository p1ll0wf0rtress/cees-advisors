import React, { Component } from 'react';
import './Popup.css';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';
import planting from './planting.svg'

import { withRouter } from 'react-router-dom';

export default class Popup extends Component {
    constructor(props){
        super(props)

        this.state = { show: "none" }
    }
    //contact button component with routing function to send to contact page
    ContactButton = withRouter(({ history }) => (
        <button
          type='button'
          onClick={() => { this.popupClicked(); history.push('/contact'); }}
          style={{color: "#222"}} className="getInTouch"
        >Get In Touch</button>
      ))
    
    componentDidMount(){
        //eslint-disable-next-line
        let timeToShow = Math.floor(Math.random() * (20 - 8 + 1)) + 8; // time in seconds, randomized, to show popup between 20 and 8 seconds
        setTimeout(this.showPopup, 
            timeToShow * 
            1000)
        this.getPopupContent()
    }
    //get popup content from sanity
    getPopupContent = () => {
        client // get popup content from sanity
        .fetch('*[_type == "page" && slug.current == "popup"][0]')
        .then((res) => {
            //set body content for popup
            this.refs.popupTitle.innerHTML = res.title;
            this.refs.popupContent.innerHTML = blocks(res);
        })
    }
    //shows the popup
    showPopup = () => {
        var clicked = window.localStorage.getItem("clicked");
        if(clicked === "true" || this.props.location.pathname.includes("/blog") === true || this.props.location.pathname === "/contact"){
            //return
        } else {
            this.setState({ show: "block" });
        }
    }
    //hides the popup
    hidePopup = () => {
        if(this.state.show === "block"){
            this.setState({ show: "none"});
        }
    }

    popupClicked = () => {
        this.hidePopup(); 
    }

    render(){
        return (
        <div style={{display: this.state.show }} className="viewport">
            <div className="popupContainer">
                <div className="closeContainer">
                    <a onClick={this.hidePopup} className="close">&times;</a>
                </div>
                <div className="popupContent container" style={{textAlign: 'left'}}>
                    <div className="row">
                    <div className="eight columns">
                        <h1 ref="popupTitle" >.</h1>
                    </div>
                    <div style={{textAlign: 'center'}} className="offset-by-one two columns">
                        <img src={planting} className="popupGraphic" alt="planting icon"/>
                    </div>
                    </div>
                    <div className="row" style={{marginTop: 20}}>
                        <div ref="popupContent">
                        </div>
                    </div>
                </div>
                <div className="bottomSection" style={{textAlign: 'center'}}>
                    <this.ContactButton/>
                </div>
            </div>
        </div>
        )
    }
}