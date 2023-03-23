import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

class Home extends Component {

  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPerPage: 6
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
    const{
      page,
      postsPerPage,
      allPost,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
  }

  render() {

    const { posts, page, postsPerPage, allPost } = this.state

    const noMorePosts = page + postsPerPage >= allPost.length

    return (
      <section className='container'>
        <Posts posts={posts}></Posts>
        <div className='button-container'>
          <Button 
            text= "Teste"
            onClick= {this.loadMorePost}
            disabled={noMorePosts}
          />
        </div>
      </section>

    );

  }

}



export default Home;
