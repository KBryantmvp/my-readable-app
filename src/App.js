import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    // console.log(this.props)
    const { posts } = this.props;
    console.log(posts)

    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapStateToProps (posts) {
  console.log('posts', posts)
  return {
    posts
  }
}

export default connect(mapStateToProps)(App);
