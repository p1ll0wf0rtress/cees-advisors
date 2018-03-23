import React, { Component } from 'react';
import './Popup.css';
import client from '../../imports/sanityclient';
import imageUrlBuilder from '@sanity/image-url';

import { withRouter } from 'react-router-dom';

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h
const serializers = {
  types: {
    code: props => (
      h('pre', {className: props.node.language},
        h('code', props.node.code)
      )
    )
  }
}

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
        setTimeout(this.showPopup, timeToShow * 1000)
        this.getPopupContent()
    }
    //get popup content from sanity
    getPopupContent = () => {
        client // get popup content from sanity
        .fetch('*[_type == "post" && slug.current == "popup"][0]')
        .then((res) => {
             //set graphic for popup
            this.setState({  mainImage: urlFor(res.mainImage).url() })
            //set body content for popup
            this.refs.popupContent.innerHTML = blocksToHtml({ blocks: res.body, serializers: serializers });
        })
    }
    //shows the popup
    showPopup = () => {
        var clicked = window.localStorage.getItem("clicked");
        if(clicked === "true"){
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
        <div style={{display: this.state.show }} className="popupContainer">
            <div className="closeContainer">
                <a onClick={this.hidePopup} className="close">&times;</a>
            </div>
            <div className="popupContent" style={{textAlign: 'left', display: 'flex', flexDirection: 'row'}}>
                <div ref="popupContent">
                </div>
                <div style={{textAlign: 'center'}}>
                    <img src={this.state.mainImage} className="popupGraphic" alt="watering can icon"/>
                </div>
            </div>
            <div className="bottomSection" style={{textAlign: 'center'}}>
                <this.ContactButton/>
            </div>
        </div>
        )
    }
}