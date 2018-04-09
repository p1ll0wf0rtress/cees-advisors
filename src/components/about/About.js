import React, { Component } from 'react';
import Bios from './bios/Bios'
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
                                <h3>Our Mission</h3>
                                <p>Architech's goal is to connect with people in a real way. Regardless of the technology used, platform changes or new techniques, Architech will always strive to create a person to person interaction. No bots, no buying clout, just all natural interpersonal communication.</p>
                                <h3>About Architech</h3>
                                <p>Architech is a data-driven consulting firm offering a full spectrum approach to uncompromised business growth and development. Starting in 2017, Architech was founded on the idea that the fundamentals of communication have not changed, but the conventions and amount of opportunities have. While businesses have more opportunity to connect with potential customers, the importance of every interaction has increased significantly. Architech is focused on maximizing the value of precious interactions companies have with potential customers by using a combination of propietary data and the data our customers already have.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Bios />
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