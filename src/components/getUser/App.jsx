import React, { useEffect } from 'react';
import './getUser.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersPosts, deleteUser } from '../../feuture/getUserSlise/getUserSlise';
import { Field, Form, Formik } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from '../../feuture/getUserSlise/getUserSlise';
import Button from '../../UA/Buttons/Button';

function App() {
  const { data } = useSelector((state) => state.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPosts());
  }, []);

  const handleSubmit = ({ message }, formik) => {
    const userName = {
      id: nanoid(5),
      name: message
    };

    formik.resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className='App'>
      <h1>Users</h1>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className='App__Form'>
            <Field type='text' placeholder={'Enter your Name'} name="message" />
            <button type="submit">Add User</button>
          </div>
        </Form>
      </Formik>
      <div className='App__Content'>
        <ul>
          {data.map((elem) => (
            <li key={elem.id}>
              <h2>{elem.name}</h2>
              <Button title='Delete' variant='warning' onclick={() => handleDelete(elem.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
