import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import "./style.scss";

function AddPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleAdd(val) {
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function deleteById(id) {
    fetch("http://localhost:5000/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="addPage">
        <div className="forms">
          <Formik
            initialValues={{ name: "", desc: "", price: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name"),
              desc: Yup.string().required("Desc"),
              price: Yup.number().required("Price"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handleAdd(values);
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className="form">
              <label htmlFor="name"></label>
              <Field
                name="name"
                type="text"
                className="field"
                placeholder="name"
              />
              <ErrorMessage name="name" />

              <label htmlFor="desc"></label>
              <Field
                name="desc"
                type="text"
                className="field"
                placeholder="desc"
              />
              <ErrorMessage name="desc" />

              <label htmlFor="price"></label>
              <Field
                name="price"
                type="text"
                className="field"
                placeholder="price"
              />
              <ErrorMessage name="price" />

              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
        <div className="adminPanel">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((x) => (
                  <tr key={x._id}>
                    <td>{x.name}</td>
                    <td>{x.desc}</td>
                    <td>${x.price}</td>
                    <td>
                      <button onClick={() => deleteById(x._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
