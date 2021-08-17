
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, Button , } from 'react-bootstrap';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/blog/featured');
                setFeaturedBlog(res.data[0]);
                console.log(res)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('/api/blog/');
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        else
            return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
        
      <div>
        <Card style={{ width: '16rem' }} className="my-3 ">
        <Card.Link href="#"  style={{ textDecoration : 'none' , margin:'3px'}}><h5>
           {capitalizeFirstLetter(blogPost.category)}</h5></Card.Link>
       <Card.Img variant="top" width="150"  height="150" src={blogPost.thumbnail} />
        <Card.Body>
        <Card.Title><h5>{blogPost.title}</h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><i className="fas fa-calendar"></i>{blogPost.month} {blogPost.day}</Card.Subtitle>
        <Card.Text style={{ width: 'auto'}}>
        {/*  {blogPost.excerpt}   */} 
         </Card.Text>
       
         <Link to={`/blog/${blogPost.slug}`} >
          <Button variant="primary">Continue reading</Button>
         </Link>
        </Card.Body>
        </Card>
        </div>
   

            );
        });

        for (let i = 0; i < list.length; i += 4) {
            result.push(
                <Container fliud>
                    <Row key={i} >
                    <Col sm={12} md={6} lg={4} xl={3}>
                      {list[i]}
                     </Col>
                     <Col sm={12} md={6} lg={4} xl={3}>
                       {list[i+1] ? list[i+1] : null}
                     </Col>
                     <Col sm={12} md={6} lg={4} xl={3}>
                       {list[i+1+1] ? list[i+1+1] : null}
                     </Col>
                     <Col sm={12} md={6} lg={4} xl={3}>
                       {list[i+1+1+1] ? list[i+1+1+1] : null}
                     </Col>
                
             
                </Row>
                </Container>
            );
        }

        return result;
    };

    return (
        <div className="container mt-3">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to="/category/world">World</Link>
                    <Link className="p-2 text-muted" to="/category/environment">Environment</Link>
                    <Link className="p-2 text-muted" to="/category/technology">Technology</Link>
                    <Link className="p-2 text-muted" to="/category/design">Design</Link>
                    <Link className="p-2 text-muted" to="/category/culture">Culture</Link>
                    <Link className="p-2 text-muted" to="/category/business">Business</Link>
                    <Link className="p-2 text-muted" to="/category/politics">Politics</Link>
                    <Link className="p-2 text-muted" to="/category/opinion">Opinion</Link>
                    <Link className="p-2 text-muted" to="/category/science">Science</Link>
                    <Link className="p-2 text-muted" to="/category/health">Health</Link>
                    <Link className="p-2 text-muted" to="/category/style">Style</Link>
                    <Link className="p-2 text-muted" to="/category/travel">Travel</Link>
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-footercol jumbotron-fluid">
                <div className=" px-0">
                    <h1 className="display-4 font-weight-bold text-light">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <Link to={`/blog/${featuredBlog.slug}`}>  <button type="button"  className="btn btn-success"> Read More</button></Link>
                </div>
            </div>

            {getBlogs()}
        </div>
    );
};




export default Blog;