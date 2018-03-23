import React, { Component } from 'react';
import client from '../../imports/sanityclient';
import './realestate.css';

import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client)
 
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

function blockConfig(res){
    return {
        blocks: res.body,
        serializers: serializers,
        projectId: 'gtb605x1',
        dataset: 'production',
    }
}

export default class RealEstate extends Component{
    constructor(props){
        super(props)

        this.state = {};
    }

    componentDidMount(){
        this.getSection1();
        this.getSection2();
        this.getFAQ();
        console.log('made it to real estate')
    }

    getSection1 = () => {
        client.fetch(`*[_type == "post" && slug.current == "solutions1"][0]`)
        .then((res) => {
            this.setState({ image1: urlFor(res.mainImage).height(75).url() });
            var inner = blocksToHtml(blockConfig(res));
            var content = inner.substring(5, inner.length - 6);
            this.refs.solutionsContent1.innerHTML = content;
        }).catch((err) => { console.log(err) })
    }

    getSection2 = () => {
        client.fetch(`*[_type == "post" && slug.current == "solutions2"][0]`)
        .then((res) => {
            this.setState({ image2: urlFor(res.mainImage).height(75).url() });
            var inner = blocksToHtml(blockConfig(res));
            var content = inner.substring(5, inner.length - 6);
            this.refs.solutionsContent2.innerHTML = content;
        }).catch((err) => { console.log(err) })
    }

    getFAQ = () => {
        client.fetch(`*[_type == "post" && slug.current == "faq"][0]`)
        .then((res) => {
            this.setState({ image3: urlFor(res.mainImage).height(75).url() });
            var inner = blocksToHtml(blockConfig(res));
            var content = inner.substring(5, inner.length - 6);
            this.refs.solutionsContent3.innerHTML = content;
        }).catch((err) => { console.log(err) })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="image1">
                        <img src={this.state.image1} alt="usa" style={{height: 75}}/>
                    </div>
                    <div className="solutionsContent1 eight columns offset-by-two" ref="solutionsContent1" style={{textAlignLast: 'center'}}></div>
                </div>
                <div className="row" style={{marginTop: 40 }}>
                <div className="image2"></div>
                    <div className="image1">
                        <img src={this.state.image2} alt="erlenmeyer flask" style={{height: 75}}/>
                    </div>
                    <div className="solutionsContent2 eight columns offset-by-two" ref="solutionsContent2" style={{textAlignLast: 'center'}}></div>
                </div>
                <div className="row" style={{marginTop: 40 }}>
                    <div className="image1">
                        <img src={this.state.image3} alt="frequently asked questions" style={{height: 75}}/>
                    </div>
                    <div className="solutionsContent3 six columns offset-by-three" ref="solutionsContent3" style={{textAlignLast: 'center'}}></div>
                </div>
            </div>
        )
    }
}