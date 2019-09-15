import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './action'

class Posts extends Component{
  UNSAFE_componentWillMount(){
    this.props.fetchPosts()
  }
  render(){
    return(
      <div>
        <h2>POSTS</h2>
        {this.props.posts.map(({title,summary}, key)=>(
          <ul key={key}>
            <li>Title: {title}</li>
            <li>Summary: {summary}</li>
          </ul>
        ))}
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return state.posts
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
