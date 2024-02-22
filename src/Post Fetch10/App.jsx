import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Post.scss'

export default function App() {
  const [post, setPost] = useState({});                  //First Post
  const [nextPost, setNextPost] = useState({});          //Second Post
  const [findIndex, setfindIndex] = useState(1);         //Distance between

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${findIndex}`)
      .then((resp) => resp.json().then((post) => setPost(post)));
  }, [findIndex]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${findIndex + 1}`)
      .then((resp) => resp.json().then((nextPost) => setNextPost(nextPost)));
  }, [findIndex]);







  return (
    <div className="App">
      <div className="Post">
        <div className="Post__section" >
          <p className="Post__id">User Id: <span>{post.id}</span></p>
          <h4 className="Post__title">{post.title}</h4>
          <p className="Post__item">{post.body}</p>
        </div>
        <div className="Post__section-second">
          <p className="Post__id">User Id: <span>{nextPost.id}</span></p>
          <h4 className="Post__title">{nextPost.title}</h4>
          <p className="Post__item">{nextPost.body}</p>
        </div>
        <div>
          <button onClick={() => setfindIndex(findIndex - 1)} disabled={findIndex === 1} className="Previous__post">Previous Post</button>
          <button onClick={() => setfindIndex(findIndex + 1)} disabled={findIndex === 100} className="Next__post">Next Post</button>
        </div>
      </div>
    </div>
  )
}
