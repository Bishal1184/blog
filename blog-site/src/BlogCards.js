import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

import "./css/blogCards.css";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function BlogCards({ blogs, deleteHandler }) {
  return (
    <>
      {blogs.map((blog, index) => {
        return (
          <>
            <div className="top">
              <div
                className="main"
                // style={{backgroundImage: `url(${blog.blog_image})` }}
                //
              >
                <Link to={{ pathname: `/details?imdbID=${blog.blog_id}` }}>
                  <div className="link-container">
                    <div className="poster-content">
                      <div className="movie-title">{blog.blog_title}</div>
                      <div className="description">{blog.blog_description}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <Row className="mx-0">
                <LinkContainer
                  to={{ pathname: `/editBlog?blog_id=${blog.blog_id}` }}
                  //   params={{ testvalue: blog.blog_id }}
                >
                  <Button as={Col} variant="warning">
                    Edit
                  </Button>
                </LinkContainer>
                <Button
                  as={Col}
                  variant="outline-danger"
                  className="mx-2"
                  onClick={() => {
                    deleteHandler(blog.blog_id);
                  }}
                >
                  Delete
                </Button>
              </Row>
            </div>
          </>
        );
      })}
    </>
  );
}

export default BlogCards;
