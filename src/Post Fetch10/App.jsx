import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [post, setPost] = useState({});
  console.log(post);
  const [findIndex, setfindIndex] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${findIndex}`)
      .then((resp) => resp.json().then((post) => setPost(post)));
  }, [findIndex]);

  return (
  <div className="App">
    <div className="Post">
      <h4 className="Post__tile">{post.title}</h4>
      <p className="Post__item">{post.body}</p>
    </div>
  </div>
  )
}
