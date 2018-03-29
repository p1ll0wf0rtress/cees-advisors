import React, {Component} from 'react';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';

export default class Services extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        client
        .fetch('*[_type == "post" && slug.current == "services"][0]')
        .then((res) => {
            this.refs.servicesContent.innerHTML = blocks(res)
        }).catch((err) => console.log(err + " from services"))
    }

    render(){
        return(
            <div className="container" style={{marginTop: 140}}>
                <div className="row">
                    <h3>Services</h3>
                    <div className="twelve columns" ref="servicesContent">
                    </div>
                </div>
            </div>
        )
    }
}