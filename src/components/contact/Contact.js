import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            submitted: false,
        }
    }

    componentDidMount(){
        window.localStorage.setItem("clicked", "true") //set local storage to stop future popup windows
    }

    handleFirstName = (e) => {
        this.setState({ first_name: e.target.value })
    }

    handleLastName = (e) => {
        this.setState({ last_name: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePhone = (e) => {
        this.setState({ phone: e.target.value })
    }

    handleMessage = (e) => {
        this.setState({ message: e.target.value })
    }

    sendMessage = (e) => {
        e.preventDefault();

        console.log(this.state)

        axios.post("https://hooks.zapier.com/hooks/catch/2944818/k301v9/", JSON.stringify(this.state))
        .then((res) => {
            this.setState({ submitted: true })
        });
    }

    renderIf = (cond, view) => {
        if(cond){
          return view
        }
        else {
          // return nothing
        }
      }

    render(){
        return(
            <div className="container contactContainer">
                {this.renderIf(!this.state.submitted,                 
                <div className="contactTitle">
                    <div className="row">
                        <div className="eight columns offset-by-two">
                            <h3>We like to talk!</h3>
                            <p>Send us a message and we'll be in touch as soon as possible!</p>
                        </div>
                    </div>
                <br />
                <form>
                    <div className="row">
                        <div className="four columns offset-by-two">
                            <label htmlFor="first_name">First Name</label>
                            <input className="u-full-width" placeholder="Your first name" id="first_name" autoComplete="off" type="text" onChange={this.handleFirstName}/>
                        </div>
                        <div className="four columns">
                        <label htmlFor="emailInput">Email</label>
                        <input className="u-full-width" placeholder="example@mailbox.com" id="emailInput" autoComplete="off" type="email" onChange={this.handleEmail}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" offset-by-two four columns">
                            <label htmlFor="last_name">Last Name</label>
                            <input className="u-full-width" placeholder="Your last name" id="last_name" autoComplete="off" type="text" onChange={this.handleLastName}/>
                        </div>
                        <div className="four columns">
                            <label htmlFor="phoneInput">Phone</label>
                            <input className="u-full-width" placeholder="(555) 555-5555" id="phoneInput" autoComplete="off" type="text" onChange={this.handlePhone}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-by-two eight columns">
                        <label htmlFor="exampleRecipientInput">Reason for contacting</label>
                        <select className="u-full-width" id="exampleRecipientInput">
                            <option value="consultation">Consultation</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns offset-by-two">
                        <label htmlFor="message">Message</label>
                        <textarea className="u-full-width" placeholder="Hey Architech! …" id="message" onChange={this.handleMessage}></textarea>
                        <input className="button-primary" value="Submit" autoComplete="off" type="submit" onClick={this.sendMessage}/>
                        </div>
                    </div>
                </form>
                </div>)}
                {this.renderIf(this.state.submitted,
                    <div className="row">
                        <p>Thanks for your message! We'll be in touch shortly.</p>
                    </div>
                )}
            </div>
        )
    }
}