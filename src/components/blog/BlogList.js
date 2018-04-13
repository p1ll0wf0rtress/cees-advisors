import React, {Component} from 'react'
import client from '../../imports/sanityclient';

export default class BlogList extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogPosts: []
        }
    }

    componentDidMount(){
        this.getBlogTitles();
    }

    toBlogPost = (post) => {
        this.props.history.push(`/blog/${post}`)
    }

    getBlogTitles = () => {
        client
        .fetch('*[_type == "blog"]')
        .then((res) => {
            // const posts = res.map((post) => <Link to={`/blog/${post.slug.current}`} key={post.slug.current}><li className="blog_card" ><h5>{post.title}</h5><p>{post.description}</p></li></Link>);
            const posts = res.map((post) => <li key={post.slug.current} className="blog_card hvr-skew-forward twelve columns" onClick={() => this.toBlogPost(post.slug.current)}><h5>{post.title}</h5><p>{post.description}</p></li>);
            this.setState({blogPosts: posts.reverse()})
        })
    }

    render(){
        return(
            <div className="container" style={{marginTop: 175, textAlign: 'left'}}>
                <div className="row">
                    <ul>{this.state.blogPosts}</ul>
                </div>
            </div>
        )
    }
}