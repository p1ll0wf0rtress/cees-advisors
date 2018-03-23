import React, { Component } from 'react';
import './Home.css';
import client from '../../imports/sanityclient';
import { Link } from 'react-router-dom'
//image builder
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}
//blocks to html
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

export default class Home extends Component {
    constructor(props){
      super(props)

      this.state = {
      }
    }

    componentDidMount(){
      this.getBodyContent();
    }

    getBodyContent = () => {
        client
        .fetch('*[_type == "post" && slug.current == "homeheader"][0]')
        .then(res => {
          this.refs.mainTitle.innerHTML = res.title;
          this.refs.mainSubtitle.innerHTML = res.body[0].children[0].text;
          this.setState({ 
            mainImage: urlFor(res.mainImage).url()
          })
        })
        .catch(err => { console.error('Oh no, error occured: ', err) });
      client
        .fetch('*[_type == "post" && slug.current == "homebody"][0]')
        .then(res => { 
            this.refs.homeBodyContent.innerHTML = blocksToHtml({
              blocks: res.body,
              serializers: serializers,
              projectId: 'gtb605x1',
              dataset: 'production',
            });
         })
        .catch(err => { console.error('Oh no, error occured: ', err) });
        client
        .fetch('*[_type == "post" && slug.current == "homebody2"][0]')
        .then(res => { 
            this.refs.homeBodyContent2.innerHTML = blocksToHtml({
              blocks: res.body,
              serializers: serializers,
              projectId: 'gtb605x1',
              dataset: 'production',
            });
         })
        .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    renderIf = (cond, view) => {
      if(cond){
        return view
      }
      else {
        // return nothing
      }
    }

    render() {
      return(
          <div className="homeContainer">
            <div className="full_width" style={{ backgroundImage: `url(${this.state.mainImage})` }}>
              <div className="container overImage">
                <div className="row" style={{textAlign: 'center'}}>
                  <div ref="mainTitle" className="mainTitle"></div>
                  <div ref="mainSubtitle" className="mainSubtitle" style={{paddingBottom: 125}}></div>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="container">
              <div className="row" style={{textAlign: 'center'}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent2"></div>
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
              <div className="row" style={{textAlign: 'center', paddingTop: 50}}>
                <div className="eight columns offset-by-two homebody" ref="homeBodyContent"></div>
              </div>
              <div className="row" style={{marginTop: 100}}>
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
            </div>
          </div>
      )
    }
}