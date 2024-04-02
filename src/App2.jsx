import React,  { useEffect, useState } from 'react'
import { getAllProduct, getAsyncProduct} from "./features/productSlice";
import { useSelector,useDispatch} from 'react-redux'
import { Form,Formik,Field } from 'formik'
import './App2.scss'
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function App2() {
  const [editable,setIsEditable]=useState(null)
    const product =useSelector(getAllProduct)
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getAsyncProduct())
    },[])




    const handleDelete=(id)=>{
      axios.delete(`http://localhost:3000/posts/${id}`)
      .then( dispatch(getAsyncProduct()))
    }

    const handleSubmit=(value,formik)=>{
      const data={
        id:nanoid(),
        ...value
      }
      axios.post('http://localhost:3000/posts/',data)
      .then(()=>dispatch(getAsyncProduct()))
      formik.resetForm()
    }
    const handleEdit=(id)=>{
      setIsEditable(id)
    }
    const editableSubmit=(e)=>{
      e.preventDefault()
      const {title,views}=e.target;
      const post={
        title:title.value,
        views:views.value,
      }
       axios.patch(`http://localhost:3000/posts/${editable}`,post)
       .then( dispatch(getAsyncProduct()))
       .then(()=>setIsEditable(null))
    
    }
  return (
    <div className='App'>
     <Formik
     initialValues={{
        title:'',
        views:''

      }}
     onSubmit={handleSubmit}>
      <Form>
        <Field name='title' placeholder='Enter product name' type='text' required/>
        <Field name='views' placeholder='product views' type='number' required min={3}/>
        <input type="submit"  value={'Add product'} />
      </Form>
     </Formik>
    <div className='App__items'>
        { 
        product.map(elm =>{
            return <div key={elm.id}>
              {(editable===elm.id) ?(
                <form onSubmit={editableSubmit}>
                  <input type="text" name="title"id="title"  required/>
                  <input type="number" name="viwes"id="number" required />
                 <button className='cancel' type='button' onClick={()=>setIsEditable(null)}>Cancel</button>
                 <button className='save' type='submit'>Save</button>
                </form>
              ):(
                <>
                 <button className='delete' onClick={()=>handleDelete(elm.id)}>
                <i className="bi bi-x-circle"></i>
              </button>
                <h2>{elm.title}</h2>
                <p>{elm.views}</p>
                <button className='Edit' onClick={()=>handleEdit(elm.id)}>
                  <i className="bi bi-pencil"></i>
                </button>
                </>
              )}
             
            </div>
        })
      } 
    </div>
    </div>
  )
}




