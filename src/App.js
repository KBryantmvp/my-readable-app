import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { fetchCategories } from './actions/categories'
import { fetchPosts } from './actions/posts'
import './App.css';
import Post from './components/Post'
// import * as MyAPI from './utils/api'
// import { getCategories } from './utils/api';

class App extends Component {
  // state = {
  //   categories: [],
  //   posts: []
  // }

  componentDidMount() {
    // console.log('this1', this);
    const { getCategories, getPosts } = this.props
    
    // console.log('getPosts', getPosts());
    // getCategories().then((res) => {
    //   this.setState({
    //     categories: res.categories
    //   })
    // })
    getCategories();
    // getPosts().then((res) => {
    //   this.setState({
    //     posts: res.posts
    //   })
    // })
    getPosts();
  }
  
  // componentWillReceiveProps(nextProps, prevState) {
  //   // console.log('this2', this);
  //   // console.log(nextProps.post);
  //   // console.log(prevState.posts);
  //   this.setState({
  //     posts: nextProps.post ? nextProps.post : prevState.posts
  //   })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { getPosts } = this.props
  //  if(prevProps.post.allIds.length < 3)
  //   getPosts();
  //   console.log(1)
  // }

  render() {
    const { post, category } = this.props;
    // console.log(this.props.category)
    // console.log('categories: ', this.state.categories)
    // console.log(this.props.post.allIds)
    // console.log(post.byId)

    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <ul className="category-list" style={{listStyleType:"none"}}>
              Categories:
              {category.categories &&
                category.categories.map((category, i) => (
                  <div className="category-item" key={i}>
                    <li>
                      <Link to={`/${category.name}`}>
                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                      </Link>
                    </li>
                  </div>
                ))}
            </ul>
            <ol>Posts:
              {(post.allIds) && 
                post.allIds.map((postItem, i) => (
                  <Post key={i} post={post.byId[postItem]} />
              ))}
            </ol>
          </div>
        )}/>
        <Route path="/react" render={() => (
          <div>
            Hello React
          </div>
        )}/>
        <Route path="/redux" render={() => (
          <div>
            Hello Redux
          </div>
        )}/>
        <Route path="/udacity" render={() => (
          <div>
            Hello Udacity
          </div>
        )}/>
      </div>
    );
  }
}

function mapStateToProps ({ category, post }) {
  // console.log(category)
  return {
    category,
    // post: Object.keys(post).map(i => post[i])
    post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
