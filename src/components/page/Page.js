import React, { Component } from 'react';
// eslint-disable-next-line
import client from '../../imports/sanityclient';

const blocksToHtml = require('@sanity/block-content-to-html');

// eslint-disable-next-line
const h = blocksToHtml.h

// eslint-disable-next-line
const serializers = {
  types: {
    code: props => (
      h('pre', {className: props.node.language},
        h('code', props.node.code)
      )
    )
  }
}

export default class Page extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        console.log(this.props.location.pathname);

        client
            .fetch(`*[_type == "raw" && title == "${this.props.location.pathname}"][0]`)
            .then((res) => {
                this.refs.pageContent.innerHTML = res.body;

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="container">
                <div className="ten columns offset-by-one" ref="pageContent">
                </div>
            </div>
        )
    }
}