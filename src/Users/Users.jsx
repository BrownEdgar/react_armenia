import React, { useEffect } from "react";
import "./Users.scss";
import { Form, Formik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  addUser,
  getAsyncUsers,
  deleteUser,
} from "../features/usersSlice/usersSlice";

export default function Users() {
  const { data, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);

  const handleSubmit = ({ message }, formik) => {
    const user = {
      id: nanoid(5),
      message,
    };
    dispatch(addUser(user));
    formik.resetForm();
  };
  const handleDelete = (userId) => dispatch(deleteUser(userId))

  return (
    <div className="Users">
      <h1>Our users</h1>
      <Formik initialValues={{ message: "" }} onSubmit={handleSubmit}>
        <Form>
          <div>
            <Field
              type="text"
              placeholder={"Add users"}
              name="message"
              className="newUser"
            />
            <input type="submit" value={"add"} className="addUser" />
          </div>
        </Form>
      </Formik>
      <div className="Users__list">
        {data.map((elm) => (
          <div key={elm.id}>
            <h2>{elm.message || elm.name}</h2>
            <button onClick={() => handleDelete(elm.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
