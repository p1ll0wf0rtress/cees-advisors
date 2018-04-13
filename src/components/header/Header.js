import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';
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

    setHeaderItemsComputer = (top) =>{
        if(top > 80){
            this.setState({
                headerMargin: 15,
                logo: 'logo-small',
                bottomPadding: 15,
                backgroundColor: '#00171fff',
                menuLink: 'scroll',
                shadowClass: 'shadow',
            }) 
        } else {
                this.setState({
                    headerMargin: 20,
                    logo: 'logo-large',
                    bottomPadding: 20,
                    backgroundColor: '#00171f00',
                    menuLink: 'noScroll',
                    shadowClass: 'noShadow',
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
            <header className={`App-header ${this.state.shadowClass}`} style={{paddingTop: 15, paddingBottom: this.state.bottomPadding, backgroundColor: this.state.backgroundColor}}>
                <div className="container">
                    <div className="three columns logo-container">
                        <Link to="/"><img src={Logo} className={this.state.logo} alt="logo"/></Link>
                    </div>
                    <div className="eight columns offset-by-one">
                        <Menu mode="horizontal" className="menuMain" id="menuMain" style={{textAlign: 'right !important', marginTop: this.state.headerMargin}}>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/">Home</Link></MenuItem>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/services">Solutions</Link></MenuItem>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/services">Industry</Link></MenuItem>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/about">About</Link></MenuItem>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/blog">Blog</Link></MenuItem>
                            <MenuItem style={{padding: '20px 10px'}}><Link className={this.state.menuLink + " menuItem"} to="/contact">Contact Us</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
            </header>
        )
    }
}