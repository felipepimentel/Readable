import React, { Component } from 'react'
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.postIds.map((id) => (
                    <PostDetail id={id} key={id} ca/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ posts, settings }, { category }) {
    return {
        postIds: Object.keys(posts)
            .filter(id => !posts[id].deleted && (category === undefined || (posts[id].category === category)))
            .sort((a, b) => settings.sortBy == 1 ?  (posts[b].voteScore - posts[a].voteScore) : (posts[b].timestamp - posts[a].timestamp) )
    }
}
export default connect(mapStateToProps)(PostList)