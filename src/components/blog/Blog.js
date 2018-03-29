import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import './Blog.css';

export default class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: true
        }
    }

    renderIf2 = (cond, view, view2) => {
        if(cond){
          return view
        }
        else {
          return view2
        }
    }

    setPost = (e) => {
        this.setState({
            list: false,
            slug: e
        })
        // console.log(e + " from blog component")
    }

    render(){
        return(
            <Switch>
                <Route exact path='/blog' component={BlogList}/>
                <Route path="/blog/:slug" component={BlogPost}/>
            </Switch>
        )
    }
}

// this.renderIf2(this.state.list, <BlogList setPost={this.setPost} />, 
// <Redirect to={{            
//     pathname: "/blog/post",
//     state: { from: this.props.location }
// }} />)