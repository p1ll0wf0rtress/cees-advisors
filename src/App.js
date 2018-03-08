import React, { Component } from 'react';
import Header from './components/header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Page from './components/page/Page';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { hotjar } from 'react-hotjar';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  componentDidMount(){
    hotjar.initialize(801885, 6);
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
        <Router basename="">
          <div>
              <Route path="" component={Header} />
              <Route exact path="/" component={Home}/>
              <Route path="/solutions" component={Page} />
              <Route path="/about" component={Page} />
              <Route path="/contact" component={Contact} />
              <Route path="" component={Footer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;