import React, { Component } from 'react';
import { connect } from 'react-redux'
import { pushVoteScore } from '../actions/posts'

class Post extends Component {
  state = {
    voteScore: 0,
    commentsCount: 0
  }

  // componentDidMount() {
  //   console.log(2)
  // }

  handleUpVote = () => {
    // this.setState(prevState => {
    //   return {voteScore: prevState.voteScore + 1};
    // })
    const voteText = 'upVote'
    this.props.dispatch(pushVoteScore(this.props.post.id, voteText))
  }

  handleDownVote = () => {
    const voteText = 'downVote'
    this.props.dispatch(pushVoteScore(this.props.post.id, voteText))
  }

  render() {
    console.log('2')
    return (
      <div>
        <li>
          {this.props.post.title}
            <div>
              <span style={{display:"inline-block"}}>
                Vote Score: {this.props.post.voteScore}
                  <div>
                    <button onClick={this.handleUpVote}>Up</button>
                    <button onClick={this.handleDownVote}>Down</button>
                  </div>
              </span>
              <span style={{display:"inline-block"}}>
                Comments: {this.props.post.commentCount}
              </span>
            </div>
        </li>
      </div>
    )
  }
}

function mapStateToProps ({ post }, ownProps) {
  // console.log(ownProps)
  // console.log('mi post', post)
  return post
}

export default connect(mapStateToProps)(Post);