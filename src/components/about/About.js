import React, { Component } from 'react';
import Bios from './bios/Bios'
import client from '../../imports/sanityclient';
import './About.css';

import imageUrlBuilder from '@sanity/image-url';
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

export default class About extends Component {
    constructor(props){
        super(props)

        this.state ={}
    }

    componentDidMount(){
        this.getContent();
    }

    getContent = () => {
        client
        .fetch(`*[_type == "post" && slug.current == "about"][0]`)
        .then((res) => {
            this.setState({ image1: urlFor(res.mainImage).url() });
            //set about1 content to the inner div returned by blocksToHtml. Substring removed outer <div></div> returned by sanity
            this.refs.about1.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div style={{textAlign: 'center'}}>
                            <img src={this.state.image1} alt="about main 1" style={{height: 60, marginBottom: 20 }} />
                            <div className="ten columns offset-by-one" ref="about1" style={{textAlignLast: 'center'}}></div>
                        </div>
                    </div>
                </div>
                <Bios />
            </div>
        )
    }
}