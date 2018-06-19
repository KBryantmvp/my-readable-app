import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPost } from '../actions/posts'
import './NewPost.css';

// const serialize = require('form-serialize');

class NewPost extends Component {

  state = {
    postCategory: 'react',
    postTitle: '',
    postBody: ''
  }

  handleSubmitNewPost = (e) => {
    e.preventDefault();
    console.log('submit');
    const { submitNewPost } = this.props;
    // console.log(submitNewPost);
    
    let postInfo = JSON.stringify({
      'author': 'Some author',
      'title': this.state.postTitle,
      'body': this.state.postBody,
      'id': 99999990,
      'category': this.state.postCategory,
      'timestamp': Date.now()
    });
    // console.log(postInfo);
    // submitNewPost(postInfo);
    this.props.dispatch(postPost(postInfo));
  }

  handleCategoryChange = (e) => { this.setState({ postCategory: e.target.value })}
  handleTitleChange = (e) => { this.setState({ postTitle: e.target.value })}
  handleBodyChange = (e) => { this.setState({ postBody: e.target.value })}


  render() {
    // console.log(this.props);
    
    return (
      <div>
        <button
          type="button"
          onClick={this.props.onCloseChange}
          className="close-modal-button"
          >
          Close
        </button><br/>
        <form name="newpost" onSubmit={this.handleSubmitNewPost}>
          <div>
            <span>Select your post category:</span>
            <select name="categories" value={this.state.postCategory} onChange={this.handleCategoryChange}>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <input
            type="text"
            name="posttitle"
            value={this.state.postTitle}
            onChange={this.handleTitleChange}
            placeholder="Enter your post title"
          />
          <br/>
          <textarea
            name="postbody"
            rows="20"
            value={this.state.postBody}
            onChange={this.handleBodyChange}
            placeholder="Post body">
          </textarea>
          <input type="submit" name="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     submitNewPost: (postInfo) => dispatch(postPost(postInfo))
//   }
// }

function mapStateToProps ({post}) {
  return {
    post
  }
}

export default connect(mapStateToProps)(NewPost);