import BlogCards from "./BlogCards";
import { useEffect, useState } from "react";
import "./css/home.css";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import Auth from "./Login/Auth";
import LoginSignButtons from "./Login/LoginButton";
import Demo from "./Card/BlogCard";
import LoginForm from "./Login/Login";

import "./Login/Login.css";

function Home() {
  let [blogs, setBlogs] = useState([]);

  let blogSearchTitle = "";

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete("http://127.0.0.1:3000/blog/deleteBlog/" + id, {})
      .then((response) => {
        console.log(response);
      });

    getAllBlogRequest();
  };

  async function getAllBlogRequest() {
    const response = await fetch("http://localhost:3000/blog");
    const responseJSON = await response.json();

    if (responseJSON) setBlogs(responseJSON);
  }

  async function getSearchBlogRequest() {
    blogSearchTitle = document.getElementById("search-form").value;
    axios
      .post("http://127.0.0.1:3000/blog/searchBlog", {
        blog_title: blogSearchTitle,
      })
      .then((response) => {
        setBlogs(response.data);
      });
  }

  useEffect(() => {
    getAllBlogRequest();
    console.log(blogs);
  }, []);

  // console.log(movies);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isLoginButton, setLoginButton] = useState(false);

  const handleLogin = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    setLoginButton(true);
  };
  const handleSignup = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    setLoginButton(false);
  };

  return (
    <>
      {/* <Auth authMode="signin"></Auth> */}
      <LoginForm isShowLogin={isShowLogin} isLoginButton={isLoginButton} />
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
            <Nav className="justify-content-end d-flex">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  id="search-form"
                />
                <Button
                  variant="outline-success"
                  onClick={() => {
                    getSearchBlogRequest();
                  }}
                >
                  Search
                </Button>
              </Form>
              <Button onClick={() => handleLogin()}>Login</Button>
              <Button onClick={() => handleSignup()}>signup</Button>
              {/* <Button>Login</Button>
              <Button>Sign Up</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "100px" }}></div>
      <div id="home">
        <span>
          <LinkContainer
            to={{ pathname: `/addBlog` }}
            //   params={{ testvalue: blog.blog_id }}
          >
            <button className="add-button">Add</button>
          </LinkContainer>

          {/* <input
            id="search-field"
            type="text"
            placeholder="Search Blog"
          ></input>
          <button
            className="search-button"
            onClick={() => {
              getSearchBlogRequest();
            }}
          >
            Search
          </button> */}
        </span>
        <Demo blogs={blogs} deleteHandler={deleteHandler} />
        {/* <div className="blog-list">
          <BlogCards blogs={blogs} deleteHandler={deleteHandler} />
        </div> */}
      </div>
    </>
  );
}

export default Home;

// API call for search
// https://www.omdbapi.com/?s=zindagi&apikey=527e1786
