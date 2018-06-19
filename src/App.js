import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Modal from 'react-modal'
import { fetchCategories } from './actions/categories'
import { fetchPosts } from './actions/posts'
import './App.css';
import ListPost from './components/ListPost'
import NewPost from './components/NewPost'
// import * as MyAPI from './utils/api'
// import { getCategories } from './utils/api';

const _ = require('lodash');

class App extends Component {
  state = {
    // categories: [],
    postsUi: [],
    modalIsOpen: false
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

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

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    const post = this.props.post;
    const postsOrdered = [].concat(this.state.postsUi);
    // console.log(post);
    // if (prevProps.post.length === 0){
    //   this.setState({
    //     postsUi: post
    //   })
    // }
    
    console.log(postsOrdered)
    // console.log(prevProps.post)
    // if (prevProps.post.length === 0 && this.props.post.length !== 0) {
    //   console.log('2')
    //   this.setState({
    //     postsUi: post
    //   })
    // }
    if (prevProps.post !== this.props.post) {
      // console.log('1')
      // console.log(prevProps);
      // console.log(this.props);
      // console.log(postsOrdered)
      // let diff = _.difference(postsOrdered, post);
      // console.log('diff', diff);
      // for (let item in postsOrdered) {
      //   console.log(item)
      //   if (item.id === diff.id && item.voteScore !== diff.voteScore) {
      //     item = diff;
      //     postsOrdered.push(item);
      //   }
      // }
      // postsUi.forEach(item => {
      //   post.forEach(postItem => {
      //     if (item === postItem) {
      //       return item.concat(postsOrdered);
      //     } else {
      //       return 
      //     }
      //   })
      // })
      this.setState({
        postsUi: post
      })
    }
    // console.log(this.state.posts)
  }

  handleSortBy = (option) => {
    const postsUi = [].concat(this.state.postsUi);
    switch (option) {
      case 'votescore' :
      console.log('votescore')
        postsUi.sort((a, b) => {
          return b.voteScore - a.voteScore
        })
        return this.setState({
          postsUi
        })

      case 'timestamp' :
        // console.log(postsUi)
        postsUi.sort((a, b) => {
          return a.timestamp - b.timestamp
        })
        return this.setState({
          postsUi
        })

      default :
        return
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { category } = this.props;
    const postsUi = this.state.postsUi;
    // console.log(this.props.category)
    // console.log('categories: ', this.state.categories)
    // console.log(this.props.post.allIds)
    // console.log(postsUi)

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
              <div style={{float:"right", marginRight:"3em"}}>Sort by:
                <span className="sort-controls">
                  {/* <button disabled type="button">Vote score</button>
                  <button type="button">Timestamp</button> */}
                  <a href="#" onClick={(e) => this.handleSortBy("votescore")}>Vote score</a>
                  <a href="#" onClick={(e) => this.handleSortBy("timestamp")}>Timestamp</a>
                </span>
              </div>
              <button
                type="button"
                style={{display:"block", margin:"10px"}}
                onClick={this.openModal}
                >
                Create new post
              </button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
              >
              {/* {console.log(this.props)} */}
                <NewPost onCloseChange={this.closeModal}></NewPost>
              </Modal>
              
              {(postsUi) && 
                postsUi.map((postItem, i) => (
                  <ListPost key={i} post={postItem} />
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
    return {
      category,
      post: Object.keys(post.byId).map(key => post.byId[key])
    }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
