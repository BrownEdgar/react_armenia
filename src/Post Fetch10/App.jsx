import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Post.scss'

export default function App() {
  const [posts, setPosts] = useState([]);                //Post
  const [findIndex, setfindIndex] = useState(1);         //Distance between

  useEffect(() => {
    const firstRequest = fetch(`https://jsonplaceholder.typicode.com/posts/${findIndex}`)
      .then((resp) => resp.json());
    const secondRequest = fetch(`https://jsonplaceholder.typicode.com/posts/${findIndex + 1}`)
      .then((resp) => resp.json());
      Promise.all([firstRequest, secondRequest]).then(data =>{
        setPosts(data)
      })
  }, [findIndex]);

  return (
    <div className="App">
      <div className="Post">
        {
          posts.map(elm =>{
            return(
              <div className="Post__section" key={elm.id} >
                <p className="Post__id">User Id: <span>{elm.id}</span></p>
                <h4 className="Post__title">{elm.title}</h4>
                <p className="Post__item">{elm.body}</p>
              </div>
            )
          })
        }
       
        <div>
          <button onClick={() => setfindIndex(findIndex - 1)} disabled={findIndex === 1} className="Previous__post">Previous Post</button>
          <button onClick={() => setfindIndex(findIndex + 1)} disabled={findIndex === 100} className="Next__post">Next Post</button>
        </div>
      </div>
    </div>
  )
}
