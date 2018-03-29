import React, { Component } from 'react';
import './Home.css';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';
import { Link } from 'react-router-dom';
import linearLogo from '../header/linear_logo.png';


export default class Home extends Component {
    constructor(props){
      super(props)

      this.state = {}
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
    getBody1 = () => {
      client
      .fetch('*[_type == "post" && slug.current == "homebody"][0]')
      .then(res => { 
          this.refs.homeBodyContent.innerHTML = blocks(res);
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }
    //get body content2 i.e. the first section after the banner
    getBody2 = () => {
      client
      .fetch('*[_type == "post" && slug.current == "homebody2"][0]')
      .then(res => { 
          this.refs.homeBodyContent2.innerHTML = blocks(res);
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    render() {
      return(
          <div className="homeContainer">
            <div className="full_width" style={{ backgroundImage: 'url(' + require('./banner.jpg') + ')' }}>
              <div className="container overImage">
                <div className="row" style={{textAlign: 'center'}}>
                  <div ref="mainTitle" className="mainTitle">Business Intelligence Meets Relationship Marketing</div>
                  <div ref="mainSubtitle" className="mainSubtitle" style={{paddingBottom: 175}}>A full spectrum approach to uncompromised business growth and development</div>
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
                <div className="row" style={{textAlign: 'center', color: '#fff'}}>
                  <h3>Ready to start growing?</h3>
                  <p>Fully realize your growth potential with Architech.</p>
                  <Link to="/contact"><button className="button-primary" style={{marginTop: 20}}>Contact Us</button></Link>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row" style={{textAlign: 'center', paddingTop: 100, paddingBottom: 75}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent"></div>
              </div>
              <div className="row">
                <div className="four columns offset-by-four" style={{textAlign: 'center'}}>
                  <Link to="/services">
                    <button className="button-primary">Find Out More</button>
                  </Link>
                </div>
              </div>
              <div className="row" style={{marginTop: 75}}>
                <div className="four columns" style={{textAlign: 'center'}}>
                  <img src={require('./interview.svg')} style={{width: 100, marginBottom: 50}} alt=""/>
                  <p>Architech uses the basics of communication, which at their core have never changed, to connect you with your clients on a deeper level.</p>
                </div>
                <div className="four columns" style={{textAlign: 'center'}}>
                  <img src={require('./analytics.svg')} style={{width: 100, marginBottom: 50}} alt=""/>
                  <p>Using your company's customer data, in conjunction with our propietary data, we create an actionable plan to grow you business engagement.</p>
                </div>
                <div className="four columns" style={{textAlign: 'center'}}>
                  <img src={require('./handshake.svg')} style={{width: 100, marginBottom: 50}} alt=""/>
                  <p>With the power of the best media techniques, Architech will help you build better relationships and grow you client base in the most meaninful way.</p>
                </div>
              </div>
              <div className="row" style={{textAlign: 'center', marginTop: 50}}>
                <img src={linearLogo} alt="horizontal Architech logo" style={{height: 50}}/>
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