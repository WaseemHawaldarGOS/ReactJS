import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

/*
Complete application flow:

In the PostList component, we make a call to fetchPostsAndUsers action.
This action fetches all the posts asynchronously using redux thunk and update redux store with posts.
It also fetches all unique userIds for all the posts that it had fetched and makes another api call to identify
username for that user id.
Not it updates redux store with all the users as well.

In PostList component we pick posts and draw the page.
In UserHeader we pick the userId being passed from PostList and accordingly fetch user object from redux store of users.
 */
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
