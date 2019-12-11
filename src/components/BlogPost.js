import React, { Component } from "react";
import "./Blog.css";

class BlogPost extends Component {
  constructor(props) {
    super();
    this.state = props.blogData;
  }

  render() {
    return (
      <div className="blog-post">
        <div className="row">
          <div className="column"><img
            className="user-photo"
            alt="User Image"
            src={this.state.author.profilePhoto}
          ></img></div>
          <div className="column">
          <p className="user-name">{this.state.author.firstName}</p>
          <p className="degree-name">{this.state.author.degree.name}</p>
          </div>
        </div>
        <div className="row">
          <img alt="Blog Image" className="blog-image" src={this.state.image}></img>
        </div>
        <div className="row description">
          <h4>{this.state.title}</h4>
        </div>
        <div className="row description">
          <p>{this.state.text}</p>
        </div>
        <div className="row view-read-box">
          <p>{this.state.topic.name}</p>
          <p>.</p>
          <p>{this.state.readingTime} min read</p>
          <p className="views">{this.state.numberOfViews} {this.state.numberOfViews<=1? " view": " views"}</p>
        </div>
      </div>
    );
  }
}

export default BlogPost;

/*
{
    "id": "5a661749132ee5062ef4f9d6",
    "title": "How to Balance Work and Study",
    "text":
      "Sometimes you just have to work. Rent is expensive in London and getting a job is the solution to a tight budget. However with the intense workload the LSE brings it can be hard to juggle both.",
    "image":
      "https://s3-eu-west-1.amazonaws.com/unibudy-prod/59b89ac729dc9a000cf0eaa4.jpg",
    "numberOfViews": 41,
    "readingTime": 1,
    "topic": {
      "name": "Student Life"
    },
    "author": {
      "firstName": "Maria",
      "profilePhoto":
        "https://s3-eu-west-1.amazonaws.com/unibudy-prod/59b8996b29dc9a000cf0ea9e.jpg",
      "degree": {
        "name": "BSc Mathematics"
      }
    }
  }

  */
