import React, {Component} from 'react';
import client from '../../imports/sanityclient';
import blocks from '../../imports/blocksToHtml';
import './Services.css'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

export default class Services extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        client
        .fetch('*[_type == "page" && slug.current == "services1"][0]')
        .then((res) => {
            this.refs.servicesContent1.innerHTML = blocks(res)
        }).catch((err) => console.log(err + " from services"));
        client
        .fetch('*[_type == "page" && slug.current == "services2"][0]')
        .then((res) => {
            // this.setState({  mainImage: urlFor(res.mainImage).url() })
            this.refs.servicesContent2.innerHTML = blocks(res)
        }).catch((err) => console.log(err + " from services"))
    }

    render(){
        return(
            <div className="services_container">
                <div className="container">
                    <div className="row">
                        <div className="ten columns offset-by-one service_content" ref="servicesContent1"></div>
                    </div>
                    <div className="row" style={{marginTop: 75}}>
                        {/* <img src={this.state.mainImage} alt="process icon" style={{height: 100, marginBottom: 10}} /> */}
                        <div className="ten columns offset-by-one service_content2" ref="servicesContent2"></div>
                    </div>
                </div>
            </div>
        )
    }
}