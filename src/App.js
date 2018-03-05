import React, { Component } from 'react';
import logo from './Logo.png';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import axios from 'axios';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { hotjar } from 'react-hotjar';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      page: 'home',
      className: 'hidden'
    }
  }

  componentDidMount(){
    this.getPage();
    hotjar.initialize(801885, 6);
  }

  handlePageChange = (e) => {
    this.setState({page: e}, () => {
      this.getPage();
      this.handleHeaderLogo();
    });
  }

  getPage = () => {
    if(this.state.page === 'contact'){
      this.setPageContent("<p>here's some static html<p>")
    }
    else {
      axios.get(`https://api.cosmicjs.com/v1/architech-website/object/${this.state.page}`)
      .then((res) => { 
        this.setPageContent(res.data.object.content) 
      })
    }
  }

  setPageContent = (content) => { 
    this.refs.pageContent.innerHTML = content;
  }

  handleHeaderLogo = () => {
    if(this.state.page === 'home'){
      this.setState({
        className: 'hidden'
      })
    }
    else {
      this.setState({
        className: 'show'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={this.state.className}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Architech</h1>
          </div>
          <Menu onPageChange={this.handlePageChange}/>
        </header>
        <div className="container view">
          <div className="row" ref="pageContent">
          </div>
        </div>
        <Footer onPageChange={this.handlePageChange}/>
      </div>
    );
  }
}

export default App;