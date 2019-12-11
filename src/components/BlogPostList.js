import React, {Component} from 'react';
import BlogPost from './BlogPost';
import './Blog.css';
import data from '../resources/data.json';

class BlogPostList extends Component {
    
    constructor (props) {
        super(props);
        this.state = {data};
    }


    render () {
        return (<div className="blog-list-wrapper">
        {this.state.data.map(el => {
            return <BlogPost key={el.id} blogData={el}></BlogPost>
            })}
        </div>);
    }
}

export default BlogPostList;