import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAsyncPosts } from "./features/postSlice";
import axios from 'axios'
import MyLoader from "./Loader";

export default function MultipleItems() {
  const [editable, setEditable] = useState(null);
  const dispatch = useDispatch()
  const { data, loading } = useSelector(getAllPosts)
  useEffect(() => {
    dispatch(getAsyncPosts())
  }, []);


  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => dispatch(getAsyncPosts()))
      .catch(err => console.log(err))
  }

  const handleEdit = (id) => {
    setEditable(id)
  }

  const handleFinishEdit = (e) => {
    e.preventDefault()
    const { title } = e.target
    const post = {
      title: title.value
    }
    axios.patch(`http://localhost:3000/posts/${editable}`, post)
      .then(() => dispatch(getAsyncPosts()))
      .then(() => setEditable(null))
      .catch(err => console.log(err))
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    !loading
      ?
      <div className="slider-container">
        <Slider {...settings}>
          {
            data.map(elm => {
              const alt = `${elm.id}th image of slide`
              return <div key={elm.id}>
                <div className="flex-part">
                  {
                    editable === elm.id ? (
                      <form onSubmit={handleFinishEdit}>
                        <div>
                          <input name="title" placeholder="Write new title" required type="text" />
                          <button>done</button>
                        </div>
                      </form>
                    )
                      : (
                        <p> {elm.title} </p>
                      )
                  }
                  <i onClick={() => handleEdit(elm.id)} className="bi bi-pencil"></i>
                </div>
                <p>{elm.body}</p>
                <br />
                <img width='200px' height='200px' src={elm.img} alt={alt} />
                <button onClick={() => handleDelete(elm.id)}>&#10006;</button>
              </div>
            })
          }
        </Slider>
      </div>
      :
      <MyLoader />
  )
}