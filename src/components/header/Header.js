import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import linearLogo from './linear_logo.png';
import './Header.css';
import Menu, { MenuItem } from 'rc-menu';
import './menu.css';

export default class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            screenWidth: window.innerWidth,
        }
    }

    componentDidMount() {
        if(this.state.screenWidth < 500){
            this.setState({
                currentLogo: linearLogo
            })
        } else {
            this.setState({
                currentLogo: logo
            })
        }
        window.addEventListener('scroll', this.handleScroll);
        var local = window.sessionStorage
        var logoStyle = window.sessionStorage.getItem("logo");
        var headerStyle = window.sessionStorage.getItem("headerMargin");
        var bottomStyle = window.sessionStorage.getItem("bottomPadding");
        if(local.length > 0){
            // eslint-disable-next-line
            this.setState({ logo: logoStyle, headerMargin: parseInt(headerStyle), bottomPadding: parseInt(bottomStyle)});
        } else {
            this.setState({ logo: 'logo-large', headerMargin: 30, bottomPadding: 25 }, () => { console.log('no style')});
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        var target = event.target || event.srcElement;
        var top = target.scrollingElement.scrollTop;
        if(this.state.screenWidth > 500){
            this.setHeaderItemsComputer(top)
        } else {
            this.setHeaderItemsPhone(top)
        }
    }

    setHeaderItemsPhone = (top) => {
        if(top > 40){
            this.setState({
                headerMargin: 0,
                logo: 'logo-small',
                bottomPadding: 5
            }, () => { 
                window.sessionStorage.setItem("logo", "logo-small")
                window.sessionStorage.setItem("headerMargin", "0") 
                window.sessionStorage.setItem("bottomPadding", "15") 
            }) 
        } else {
                this.setState({
                    headerMargin: 0,
                    logo: 'logo-large',
                    bottomPadding: 15
                }, () => { 
                    window.sessionStorage.setItem("logo", "logo-large")
                    window.sessionStorage.setItem("headerMargin", "0") 
                    window.sessionStorage.setItem("bottomPadding", "15") 
                })
        }
    }

    setHeaderItemsComputer = (top) =>{
        if(top > 40){
            this.setState({
                headerMargin: 0,
                logo: 'logo-small',
                bottomPadding: 15
            }, () => { 
                window.sessionStorage.setItem("logo", "logo-small")
                window.sessionStorage.setItem("headerMargin", "0") 
                window.sessionStorage.setItem("bottomPadding", "15") 
            }) 
        } else {
                this.setState({
                    headerMargin: 30,
                    logo: 'logo-large',
                    bottomPadding: 25
                }, () => { 
                    window.sessionStorage.setItem("logo", "logo-large")
                    window.sessionStorage.setItem("headerMargin", "30") 
                    window.sessionStorage.setItem("bottomPadding", "25") 
                })
        }
    }

    render(){
        return(
            <header className="App-header" style={{paddingTop: 15, paddingBottom: this.state.bottomPadding}}>
                <div className="container">
                    <div className="three columns logo-container">
                        <img src={this.state.currentLogo} className={this.state.logo} alt="logo"/>
                    </div>
                    <div className="seven columns offset-by-two">
                        <Menu mode="horizontal" className="u-full-width menuMain" style={{marginTop: this.state.headerMargin}}>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/">Home</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/about">Who We Are</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><a style={{padding: "10px 5px"}} href="https://medium.com/@architechdata" target="_blank" rel="noopener noreferrer">Blog</a></MenuItem>
                            {/* <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="">Our Work</Link></MenuItem> */}
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/contact">Contact Us</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
            </header>
        )
    }
}

// the fundamentals of communication have not changed inspite of technilogical advances. What has changed is how many people you can interact with and how difficult it is to remain unique and actually get the attention with those who matter.