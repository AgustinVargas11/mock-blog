import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './postIndex.redux';
import { Link } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 750,
        height: 450,
        // overflowY: 'auto',
    },
};

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map(post => (
                <Link to={`post/${post._id}`} key={post._id}
                      cols={post.featured ? 2 : 1}
                      rows={post.featured ? 2 : 1}>
                    <GridTile
                        title={post.title}
                        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0, 105, 92 ,0.7) 0%,rgba(0, 105, 92,0.3) 70%,rgba(0, 105, 92,0) 100%)"
                    >
                        <img src={post.img}/>
                    </GridTile>
                </Link>
            )
        )
    }

    render() {
        console.log(this.props.posts);
        return (
            <div style={styles.root}>
                <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                >
                    {this.renderPosts(this.props.posts)}
                </GridList>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts: posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);