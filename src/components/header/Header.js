import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        window.addEventListener('scroll', this.handleScroll);
        this.setHeaderItemsComputer();
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        var target = event.target || event.srcElement;
        var top = target.scrollingElement.scrollTop;
        this.setHeaderItemsComputer(top)
    }

    setHeaderItemsPhone = (top) => {
        if(top > 40){
            this.setState({
                headerMargin: 0,
                logo: 'logo-small',
                bottomPadding: 5
            }) 
        } else {
                this.setState({
                    headerMargin: 0,
                    logo: 'logo-large',
                    bottomPadding: 15
                })
        }
    }

    setHeaderItemsComputer = (top) =>{
        if(top > 40){
            this.setState({
                headerMargin: 0,
                logo: 'logo-small',
                bottomPadding: 15
            }) 
        } else {
                this.setState({
                    headerMargin: 15,
                    logo: 'logo-large',
                    bottomPadding: 25
                })
        }
    }

    showMenu = () => {
        var menu = document.getElementById("menuMain");
        if(menu.style.display === 'none'){
            console.log('got here')
            menu.display = 'block';
        }
    }

    render(){
        return(
            <header className="App-header" style={{paddingTop: 15, paddingBottom: this.state.bottomPadding}}>
                <div className="container">
                    <div className="three columns logo-container">
                        <Link to="/"><img src={linearLogo} className={this.state.logo} alt="logo"/></Link>
                    </div>
                    <div className="six columns offset-by-three">
                        <Menu mode="horizontal" className="u-full-width menuMain" id="menuMain" style={{textAlign: 'right !important', marginTop: this.state.headerMargin}}>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/">Home</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/services">Services</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/about">About</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/blog">Blog</Link></MenuItem>
                            <MenuItem style={{padding: "10px 5px"}}><Link style={{padding: "10px 5px"}} to="/contact">Contact</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
            </header>
        )
    }
}