
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, Button , } from 'react-bootstrap';
import classes from './Blog.module.css';


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
    console.log(blogs)
 
           
    return (
        <div className="container my-3 mt-3">
            <div className={classes.BlogPage}><div className="nav-scroller py-1 mb-2">
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
            </div></div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-footercol jumbotron-fluid">
                <div className=" px-0">
                    <h6 className="display-6 font-weight-bold text-light">{featuredBlog.title}</h6>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <Link to={`/blog/${featuredBlog.slug}`}>  <button type="button"  className="btn btn-success"> Read More</button></Link>
                </div>
            </div>
           
              
        <div >
            <Row>
                 { blogs.map(blogPost => (
                <Col sm={6} md={6} lg={4} xl={3}> 
                    <Card className="my-3 ">
                        <Card.Link href="#"  style={{ textDecoration : 'none' }}><h5>
                        {capitalizeFirstLetter(blogPost.category)}</h5></Card.Link>
                        <Link to={`/blog/${blogPost.slug}`} >
                            <Card.Img variant="top" src={blogPost.thumbnail} />
                        </Link>
                        <Card.Body>
                            <Card.Title style={{ width: '95%',}} ><h6 style={{ color : 'blue',}}>{blogPost.title}</h6></Card.Title>
                            <Card.Subtitle className="mb-2 my-1 text-muted"><i className="fas fa-calendar"></i>{blogPost.month} {blogPost.day}</Card.Subtitle>
                            <Card.Text style={{ width: 'auto'}}>
                             {/*  {blogPost.excerpt}   */} 
                            </Card.Text>
                            <Link to={`/blog/${blogPost.slug}`} >
                                <Button variant="primary">Continue reading</Button>
                            </Link>
                        </Card.Body>    
                    </Card>
                </Col>
        ) ) }
       

      

      
      
       </Row>
       </div>
            
            

            
        </div>
    );
};





export default Blog;