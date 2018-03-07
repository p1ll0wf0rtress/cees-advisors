import React, { Component } from 'react';
import logo from './Logo.png';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { hotjar } from 'react-hotjar';
import client from './imports/sanityclient';

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

  getPage = () => {
    if(this.state.page === 'contact' || this.state.page === 'home'){ 
      //do nothing 
    }
    else {
      client
        .fetch(`*[_type == "raw" && title == "${this.state.page}"] { body }`)
        .then(res => { this.setPageContent(res[0].body) })
        .catch(err => { console.error('Oh no, error occured: ', err) });
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