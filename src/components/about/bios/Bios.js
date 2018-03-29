import React, { Component } from 'react';
import client from '../../../imports/sanityclient';
import imageUrlBuilder from '@sanity/image-url';
import './Bios.css';
const builder = imageUrlBuilder(client)
 // eslint-disable-next-line
function urlFor(source) {
  return builder.image(source)
}

const blocksToHtml = require('@sanity/block-content-to-html');
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
// eslint-disable-next-line
function blockConfig(res){
    return {
        blocks: res.body,
        serializers: serializers,
        projectId: 'gtb605x1',
        dataset: 'production',
    }
}

export default class Bios extends Component {
    constructor(props){
        super(props)

        this.state = {
            travis: { title: '', headshotUrl: ''},
            brianna: { title: '', headshotUrl: ''},
            ben: { title: '', headshotUrl: ''},
            devin: { title: '', headshotUrl: ''},
        }
    }

    componentDidMount(){
        this.getTravis();
        this.getBrianna();
        this.getBen();
        this.getDevin();
    }

    getTravis = () => {
        client
        .fetch('*[_type == "bio" && slug.current == "travis"][0]')
        .then((res) => {
            this.refs.travisBio.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6)
            this.setState({
                travis: {
                    title: res.title, headshotUrl: urlFor(res.mainImage).url()
                }
            })
        })
    }

    getBrianna = () => {
        client
        .fetch('*[_type == "bio" && slug.current == "brianna"][0]')
        .then((res) => {
            this.refs.briannaBio.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6)
            this.setState({
                brianna: { title: res.title, headshotUrl: urlFor(res.mainImage).url()}
            })
        })
    }

    getBen = () => {
        client
        .fetch('*[_type == "bio" && slug.current == "ben"][0]')
        .then((res) => {
            this.refs.benBio.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6)
            this.setState({
                ben: { title: res.title, headshotUrl: urlFor(res.mainImage).url()}
            })
        })
    }

    getDevin = () => {
        client
        .fetch('*[_type == "bio" && slug.current == "devin"][0]')
        .then((res) => {
            this.refs.devinBio.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6)
            this.setState({
                devin : { title: res.title, headshotUrl: urlFor(res.mainImage).url()}
            })
        })
    }

    render(){
        return(
        <div>
            <div className="team_header">
                <div className="container">
                    <div className="row" style={{textAlign: 'center', marginBottom: 40, marginTop: 30}}>
                        {/* <img src={require("./collaboration.svg")} alt="team icon" style={{height: 75, marginBottom: 20}} /> */}
                        <h3 style={{color: '#fff'}}>The Architech Team</h3>
                    </div>
                </div>
            </div>
            <div className="container" style={{marginTop: 60}}>
                <div className="row bios">
                    <div className="six columns bio">
                        <img src={this.state.travis.headshotUrl} style={{borderRadius: 50, objectFit: 'cover', height: 100}} alt="bio pic travis"/>
                        <h5>{this.state.travis.title}</h5>
                        <div style={{textAlign: 'justify', textAlignLast: 'center'}} ref="travisBio"></div>
                    </div>
                    <div className="six columns bio">
                        <img src={this.state.brianna.headshotUrl} style={{borderRadius: 50, objectFit: 'cover', height: 100}} alt="bio pic brianna"/>
                        <h5>{this.state.brianna.title}</h5>
                        <div style={{textAlign: 'justify', textAlignLast: 'center'}} ref="briannaBio"></div>
                    </div>
                </div>
                <div className="row bios">
                    <div className="six columns bio">
                        <img src={this.state.ben.headshotUrl} style={{borderRadius: 50, objectFit: 'cover', height: 100}} alt="bio pic ben"/>
                        <h5>{this.state.ben.title}</h5>
                        <div style={{textAlign: 'justify', textAlignLast: 'center'}} ref="benBio"></div>
                    </div>
                    <div className="six columns bio">
                        <img src={this.state.devin.headshotUrl} style={{borderRadius: 50, objectFit: 'cover', height: 100}} alt="bio pic devin"/>
                        <h5>{this.state.devin.title}</h5>
                        <div style={{textAlign: 'justify', textAlignLast: 'center'}} ref="devinBio"></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}