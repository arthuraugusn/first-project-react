import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

class Home extends Component {

  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPerPage: 2
  }


  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {

    const { page, postsPerPage } = this.state

    const postsAndPhotos = await loadPosts()

    this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPost: postsAndPhotos })

  }

  loadMorePost = () => {
    console.log("Load more posts");
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
  }

  render() {

    const { posts } = this.state

    return (
      <section className='container'>
        <Posts posts={posts}></Posts>
        <button onClick={this.loadMorePost}>Load More Posts</button>
      </section>

    );

  }

}



export default Home;
