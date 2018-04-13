import React, { Component } from 'react';
// import Bios from './bios/Bios'
import './About.css';

export default class About extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <div className="about">
                <div className="container" style={{marginBottom: 50}}>
                    <div className="row">
                        <div style={{textAlign: 'center'}}>
                            {/* <img src={this.state.image1} alt="about main 1" style={{height: 60, marginBottom: 20 }} /> */}
                            <div className="ten columns offset-by-one" ref="about1" style={{textAlignLast: 'center'}}>
                                <h3>Any Building. Any Business. Anywhere.</h3>
                                <p>No matter what your organization's current building operations look like, Competitive Edge Energy Solutions can bring your building up to the forefront of operational efficiency. Our 30 years of expertise is within your reach at the click of a button. Contact us to today to find out more.</p>
                                <h3>About CEES Advisors</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Bios /> */}
            </div>
        )
    }
}

// componentDidMount(){
//     //disabled and made static for now
//     // this.getContent();
// }

// getContent = () => {
//     client
//     .fetch(`*[_type == "post" && slug.current == "about"][0]`)
//     .then((res) => {
//         // this.setState({ image1: urlFor(res.mainImage).url() });
//         //set about1 content to the inner div returned by blocksToHtml. Substring removed outer <div></div> returned by sanity
//         this.refs.about1.innerHTML = blocksToHtml(blockConfig(res)).substring(5, blocksToHtml(blockConfig(res)).length - 6);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }