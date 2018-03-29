import React, {Component} from 'react';
import client from '../../imports/sanityclient';
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

export default class BlogPost extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
        client
        .fetch(`*[_type == "blog" && slug.current == "${this.props.match.params.slug}" ][0]`)
        .then(res => { 
            this.setState({title: res.title})
            this.refs.postContent.innerHTML = blocksToHtml({
              blocks: res.body,
              serializers: serializers,
              projectId: 'gtb605x1',
              dataset: 'production',
            });
         })
        .catch(err => { console.error('Oh no, error occured: ', err) });
    }

    render(){
        return(
            <div className="container" style={{marginTop: 175}}>
                <div className="row">
                    <h3>{this.state.title}</h3>
                </div>
                <div className="row">
                    <div className="twelve columns" ref="postContent"></div>
                </div>
            </div>
        )
    }
}