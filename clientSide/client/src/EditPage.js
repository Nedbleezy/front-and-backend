import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const userNavigate = useNavigate();

  const postBlog = {
    title: title,
    content: content,
    author: author,
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3001/api/post`, postBlog)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    userNavigate('/');
  };

  return (
    <div className='container'>
      <h1>New Post</h1>

      <form id='editform' onSubmit={handleSubmit}>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} />
        <textarea name='content' rows='10' onChange={(e) => setContent(e.target.value)}></textarea>
        <input type='text' name='author' onChange={(e) => setAuthor(e.target.value)} />
        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
};

export default EditPage;
