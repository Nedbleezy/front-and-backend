import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h1>My Blog</h1>
      <Link to='/new'>new post</Link>
      <ul id='postsList'>
        {posts.map((post, id) => {
          return (
            <article key={id}>
              <li>
                <h2>{post.title}</h2>
              </li>
              <p>{post.content}</p>
              <small> By:{post.author}</small>
              <h4>{post.date}</h4>
              <Link className='edit' to={`edit/${post.id}`}>
                Edit
              </Link>
              <Link className='delete' to={`delete/${post.id}`}>
                delete
              </Link>
            </article>
          )
        })}
      </ul>
    </div>
  )
}

export default App
