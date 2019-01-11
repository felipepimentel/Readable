import React, { Component } from 'react'
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.postIds.map((id) => (
                    <PostDetail id={id} key={id}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        postIds: Object.keys(posts)
            .sort((a, b) => posts[b].timestamp - posts[a].timestamp)
    }
}
export default connect(mapStateToProps)(PostList)