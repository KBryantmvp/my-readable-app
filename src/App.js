import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { fetchCategories } from './actions/categories'
import './App.css';
// import * as MyAPI from './utils/api'
// import { getCategories } from './utils/api';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    const { getCategories } = this.props
    // console.log(getCategories)
    getCategories().then((res) => {
      console.log('res', res)
      this.setState({
        categories: res.categories
      })
    })
    // console.log(getCategories())
    // MyAPI.getCategories().then((categories) => {
    //   this.setState({
    //     categories
    //   })
    // })
    // MyAPI.getCategories().then(category => console.log(category))
    // this.props.getCategories()
  }

  render() {
    // const { posts, getCategories } = this.props;
    // console.log(this.props)
    console.log('categories: ', this.state.categories)
    

    return (
      <div>
        <Route exact path="/" render={() => (
          <ul style={{listStyleType:"none"}}>
            {this.state.categories.map((category, i) => (
              <Link to={`/${category.name}`} key={i}>
                <li>
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        )}/>
        <Route path="/react" render={() => (
          <div>
            Hello World
          </div>
        )}/>
      </div>
    );
  }
}

function mapStateToProps (posts) {
  // console.log('posts', posts)
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
