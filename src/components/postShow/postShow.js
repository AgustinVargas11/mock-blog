import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from './postShow.redux';
import { Link, browserHistory } from 'react-router';

class PostShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id)
    }

    handleClick() {
        this.props.deletePost(this.props.params.id)
            .then(({ payload: { status } }) => {
                if (status === 200) {
                    browserHistory.push('/');
                }
            });
    }

    renderPost(post) {
        if (!post || (post._id !== this.props.params.id)) {
            return null;
        } else {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
    }

    render() {
        const { post } = this.props;

        return (
            <div>
                <p><Link to="/">go back</Link></p>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.handleClick.bind(this)}>Delete Post
                </button>
                {this.renderPost(post)}
            </div>
        );
    }
}

function mapStateToProps({ post }) {
    return { ...post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);