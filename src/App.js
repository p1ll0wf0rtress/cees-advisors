import React, { Component } from 'react';
import logo from './Logo.png';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
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
    }
  }

  componentDidMount(){
    this.getPage();
    hotjar.initialize(801885, 6);
  }

  handlePageChange = (e) => {
    this.setState({page: e}, () => {
      this.getPage();
    });
  }
  //this.state.page === 'home' || 
  getPage = () => {
    if(this.state.page === 'contact'){ 
      //do nothing 
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

  renderIf = (cond, view) => {
    if(cond){
      return view
    }
    else {
      // return nothing
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
        <div>
          {this.renderIf(this.state.page === 'home', <Home/>)}
          {this.renderIf(this.state.page === 'contact', <Contact/>)}
          {this.renderIf(this.state.page !== 'home' && this.state.page !== 'contact',
            <div className="container">
              <div className="row">
                <div className="ten columns offset-by-one" ref="pageContent"></div>
              </div>
            </div>
          )}
        </div>
        <Footer onPageChange={this.handlePageChange}/>
      </div>
    );
  }
}

export default App;