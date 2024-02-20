import React from "react";
import Modal from "./Modal";
import Nav from "./Nav";
import "./Modal.scss";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [opened, setOpened] = useState(false); //Open Modal
  const [data, setData] = useState([
    "John",
    "Mishel",
    "Jane",
    "Harry",
    "Matue",
    "Richard",
  ]);
  const [selectedName, setSelectedName] = useState(""); //
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const resaut = await response.json();
      setPosts(resaut);
    }
    getPost();
  }, []);

  const toggleClick = (name) => {
    setSelectedName(name);
    setOpened(!opened);
  };

  const handleYesClick = async () => {
    const filteredPosts = posts.filter((post) =>
      post.title.includes(selectedName)
    ); // Filter posts on the selected name
    setPosts(filteredPosts);
    toggleClick(); // Close the modal
  };

  return (
    <div className="App">
      <Nav>
        <ul className="Nav__list">
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
          <li>list4</li>
          <li>list5</li>
        </ul>
      </Nav>

      <div className="Name__item">
        {data.map((elm) => (
          <div className="Name__section" key={elm}>
            <h2>{elm}</h2>
            <button onClick={() => toggleClick(elm)}>Delete</button>
          </div>
        ))}
      </div>

      {opened ? (
        <Modal>
          <h3>Do You Want Close?</h3>
          <button onClick={toggleClick}>No</button>
          <button onClick={handleYesClick}>Yes I Want</button>
        </Modal>
      ) : null}
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
