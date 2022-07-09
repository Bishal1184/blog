import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Grid } from "@mui/material";

import "./blogCard.css";

export default function MediaCard({ blogs }) {
  return (
    <>
      <Grid
        padding={10}
        justifyContent="center"
        container
        spacing={3}
        // columns={{ xs: 12, sm: 6, md: 6, lg: 3 }}
      >
        {blogs.map((blog, index) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="mycard" sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      noWrap
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {blog.blog_title}
                    </Typography>
                    <Typography noWrap variant="body2" color="text.secondary">
                      {blog.blog_description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
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
                          //   deleteHandler(blog.blog_id);
                        }}
                      >
                        Delete
                      </Button>
                    </Row>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
