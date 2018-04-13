import React, { Component } from 'react';
import Header from './components/header/Header';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services'
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import NotFound from './components/notfound/NotFound'
import './App.css';
import './normalize.css';
import './skeleton.css';
import { hotjar } from 'react-hotjar';
import Popup from './components/popup/Popup';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  componentDidMount(){
    hotjar.initialize(801885, 6);
  }

  passPopupState = (data) => {
    this.setState({ popupDisplayCount: data})
  }

  render() {
    return (
      <div className="App"> 
        <div>  
        <Router basename="/">
          <div>
            <Route path="/" component={Popup} />
            <Route path="/" component={Header} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/post/:slug" component={BlogPost} />
              <Route component={NotFound} />
            </Switch>
            <Route path="/" component={Footer} />
          </div>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;