import axios from "axios";
import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const EditBlog = () => {
  const [editblog, setEditBlog] = useState({});

  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);

  let blog_id = queryParams.get("blog_id");

  async function getBlogByIDRequest() {
    axios
      .post("http://127.0.0.1:3000/blog/searchBlogByID", {
        blog_id: blog_id,
      })
      .then((response) => {
        console.log(response.data[0]);
        setEditBlog(response.data[0]);
        console.log(editblog);
      });
  }

  useEffect(() => {
    getBlogByIDRequest();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    let thisedit = editblog;
    thisedit = { ...thisedit, [name]: value };
    setEditBlog(thisedit);
  };

  const submitHandler = (event) => {
    //console.log(editblog);
    // console.log({
    //   blog_id: blog_id,
    //   blog_title: editblog.blog_title,
    //   blog_image: editblog.blog_image,
    //   blog_description: editblog.blog_description,
    // });

    axios
      .put("http://127.0.0.1:3000//blog/editBlog", {
        blog_id: editblog.blog_id,
        blog_title: editblog.blog_title,
        blog_image: editblog.blog_image,
        blog_description: editblog.blog_description,
      })
      .then((response) => {
        console.log(response);
      })
      .then(navigate("/"));

    navigate("/");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Blog Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ height: "70px" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "100px" }}></div>
      <h1>Edit Blog</h1>
      <Form className="register-form">
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="blog_title"
            value={editblog?.blog_title}
            // "blog_title" in editblog && editblog.blog_title
            // editblog?.blog_title
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="Image URL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Image Url"
            name="blog_image"
            value={editblog?.blog_image}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Description"
            name="blog_description"
            value={editblog?.blog_description}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* <LinkContainer
          to={{
            pathname: "/",
            editblog,
          }}
        > */}
        <Button
          onClick={() => {
            submitHandler();
          }}
          variant="success"
          size="lg"
        >
          Save
        </Button>
        {/* </LinkContainer> */}
      </Form>
    </div>
  );
};

export default EditBlog;
