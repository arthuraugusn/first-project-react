import './styles.css'

export const PostCard = (props) => {
  const post = props
  return (
    <div className="post">
      <img src={post.cover} alt="teste" />
      <div class_name="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )

}