import React, { Component } from 'react';
import './Home.css';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';
import { Link } from 'react-router-dom';
import './../../hover-min.css'

export default class Home extends Component {
    constructor(props){
      super(props)

      this.state = {
        screenWidth: window.innerWidth,
      }
    }

    componentDidMount(){
      this.getAllBodyContent();
    }

    // get all the body content from sanity.io
    getAllBodyContent = () => {
      // this.getBanner(); disabled for now
      this.getBody1();
      this.getBody2();
    }

    // get body content1 i.e. the section after the chevron (position 1 & 2 have been reversed for now)
    getBody2 = () => {
      client
      .fetch('*[_type == "page" && slug.current == "homebody2"][0]')
      .then(res => { 
          this.refs.homeBodyContent2.innerHTML = blocks(res);
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }
    //get body content2 i.e. the first section after the banner
    getBody1 = () => {
      client
      .fetch('*[_type == "page" && slug.current == "homebody1"][0]')
      .then(res => { 
          this.refs.homeBodyContent.innerHTML = blocks(res);
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    render() {
      return(
          <div className="homeContainer">
            <div className="full_width" style={{ backgroundImage: 'url(' + require('./banner.jpg') + ')'}}>
              <div className="container overImage">
                <div className="row" style={{textAlign: 'center'}}>
                  <div ref="mainTitle" className="mainTitle" style={{paddingTop: '40vh'}}>Competitive Edge Energy Solutions</div>
                  <div ref="mainSubtitle" className="mainSubtitle">Creating better buildings for better world</div>
                  <button className="button-primary" style={{marginTop: 20}}>Get Ready</button>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="container">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent2">
                </div>
              </div>
            </div>
            <div className="callToAction">
              <div className="container">
                <div className="row" style={{textAlign: 'center', color: '#fff', marginTop: 225}}>
                  <h3>Get your buildings ready</h3>
                  <p>Energy efficiency is just a click away</p>
                  <Link to="/contact"><button className="button-primary hvr-float-shadow" style={{marginTop: 20}}>Contact Us</button></Link>
                </div>
              </div>
            </div>
            <div className="container">

              <div className="row" style={{textAlign: 'center', marginTop: 125}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent"></div>
              </div>
            
              <div className="row" style={{textAlign: 'center', marginTop: 100, marginBottom: 0}}>
                <div className="twelve columns">
                  <h3>A Simply Efficient Process</h3>
                </div>
              </div>

              <div className="row" style={{marginTop: 50}}>
                <div className="four columns trifold hvr-grow" style={{textAlign: 'center'}} onClick={() => this.props.history.push("/services")}>
                  <img src={require('./icons/interview.svg')} style={{width: 125, marginBottom: 50}} alt=""/>
                  <p>Architech uses the basics of communication, which at their core have never changed, to connect you with your clients on a deeper level.</p>
                </div>
                <div className="four columns trifold hvr-grow" style={{textAlign: 'center'}} onClick={() => this.props.history.push("/services")}>
                  <img src={require('./icons/analytics.svg')} style={{width: 125, marginBottom: 50}} alt=""/>
                  <p>Using your company's customer data, in conjunction with our propietary datasets, we create an action plan to grow you business engagement.</p>
                </div>
                <div className="four columns trifold hvr-grow" style={{textAlign: 'center'}} onClick={() => this.props.history.push("/services")}>
                  <img src={require('./icons/handshake.svg')} style={{width: 125, marginBottom: 50}} alt=""/>
                  <p>With the power of the best media techniques, Architech will help you build better relationships and grow you client base in a meaninful way.</p>
                </div>
              </div>

              <div className="row" style={{textAlign: 'center', marginTop: 100}}>
                <h5>Competitive Edge Energy Solutions</h5>
              </div>
            </div>
          </div>
      )
    }
}
//CURRENTLY UNUSED FUNCTIONS

//image builder
// import imageUrlBuilder from '@sanity/image-url';
// const builder = imageUrlBuilder(client)
 
// function urlFor(source) {
//   return builder.image(source)
// }

// getBanner = () => {
//   client
//   .fetch('*[_type == "post" && slug.current == "homeheader"][0]')
//   .then(res => {
//     this.refs.mainTitle.innerHTML = res.title; //set main title phrase
//     this.refs.mainSubtitle.innerHTML = res.body[0].children[0].text; //set main subtitle phrase
//     this.setState({ mainImage: urlFor(res.mainImage).url() }) //set banner background image
//   })
//   .catch(err => { console.error('Oh no, error occured: ', err) });
// }