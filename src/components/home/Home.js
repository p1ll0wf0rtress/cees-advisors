import React, { Component } from 'react';
import './Home.css';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';
import './../../hover-min.css';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

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
      this.getWindows();
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

    getWindows = () => {
      this.getWindow1();
      this.getWindow2();
      this.getWindow3();
    }

    getWindow1 = () => {
      client
      .fetch('*[_type == "page" && slug.current == "home-window-1"][0]')
      .then(res => { 
          this.setState({windowImg1: urlFor(res.mainImage).url()});
          this.refs.window1.innerHTML = blocks(res);
          this.setState({windowLink1: res.link})
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    getWindow2 = () => {
      client
      .fetch('*[_type == "page" && slug.current == "home-window-2"][0]')
      .then(res => { 
          this.setState({windowImg2: urlFor(res.mainImage).url()});
          this.refs.window2.innerHTML = blocks(res);
          this.setState({windowLink2: res.link})
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    getWindow3 = () => {
      client
      .fetch('*[_type == "page" && slug.current == "home-window-3"][0]')
      .then(res => { 
          this.setState({windowImg3: urlFor(res.mainImage).url()});
          this.refs.window3.innerHTML = blocks(res);
          this.setState({windowLink3: res.link})
       })
      .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    toServices = () => {
      window.scrollY = 0;
      this.props.history.push('/services');
    }

    toContact = () => {
      document.scrollingElement.scrollTop = 0;
      this.props.history.push('/contact');
    }

    render() {
      return(
          <div className="homeContainer">
            <div className="full_width" style={{ backgroundImage: 'url(' + require('./banner.jpg') + ')'}}>
              <div className="container overImage">
                <div className="row" style={{textAlign: 'center'}}>
                  <div ref="mainTitle" className="mainTitle" style={{paddingTop: '40vh'}}>Competitive Edge Energy Solutions</div>
                  <div ref="mainSubtitle" className="mainSubtitle">Creating better buildings for better world</div>
                  <button className="button-primary" style={{marginTop: 20}} onClick={() => this.toServices()}>Get Ready</button>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="container">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent">
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row window_container" style={{textAlign: 'center'}}>
                <div className="four columns window hvr-grow" style={{backgroundImage: `url(${this.state.windowImg1})`}}>
                  <div ref="window1"></div>
                  <button className="button-primary" onClick={() => this.props.history.push(`/blog/${this.state.windowLink1}`)}>Learn More</button>
                </div>
                <div className="four columns window hvr-grow" style={{backgroundImage: `url(${this.state.windowImg2})`}}>
                  <div ref="window2"></div>
                  <button className="button-primary" onClick={() => this.props.history.push(`/blog/${this.state.windowLink2}`)}>Learn More</button>
                </div>
                <div className="four columns window hvr-grow" style={{backgroundImage: `url(${this.state.windowImg3})`}}>
                  <div ref="window3"></div>
                  <button className="button-primary" onClick={() => this.props.history.push(`/blog/${this.state.windowLink3}`)}>Learn More</button>
                </div>
              </div>
            </div>
            <div className="callToAction">
              <div className="container">
                <div className="row" style={{textAlign: 'center', color: '#00171F', marginTop: 225}}>
                  <h3>Get your buildings ready</h3>
                  <p>Energy efficiency is just a click away</p>
                  <button className="button-primary hvr-float-shadow" style={{marginTop: 20}} onClick={() => this.toContact()} >Contact Us</button>
                </div>
              </div>
            </div>
            <div className="container">

              <div className="row homebody2" style={{textAlign: 'center'}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent2"></div>
              </div>
            
              {/* <div className="row" style={{textAlign: 'center', marginTop: 100, marginBottom: 0}}>
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
              </div> */}

              <div className="row" style={{textAlign: 'center', marginTop: 100}}>
                <h5>Competitive Edge Energy Solutions</h5>
              </div>
            </div>
          </div>
      )
    }
}