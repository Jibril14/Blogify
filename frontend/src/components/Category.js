import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card, Button , } from 'react-bootstrap';

const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post('/api/blog/category', { category }, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        else
            return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <Card style={{ width: '16rem' }} className="my-3 ">
        <Card.Link href="#"  style={{ textDecoration : 'none' , margin:'3px'}}><h5>
           {capitalizeFirstLetter(blogPost.category)}</h5></Card.Link>
       <Card.Img variant="top" width="150"  height="150" src={blogPost.thumbnail} />
        <Card.Body>
        <Card.Title><h5>{blogPost.title}</h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><i className="fas fa-calendar"></i>{blogPost.month} {blogPost.day}</Card.Subtitle>
        <Card.Text >
        <p style={{ color: 'red'}}>{blogPost.excerpt} </p> 
         </Card.Text>
       
         <Link to={`/blog/${blogPost.slug}`} >
          <Button variant="primary">Continue reading</Button>
         </Link>
        </Card.Body>
        </Card>

            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (
        <div className="container mt-3">
            <h4 >{currentCategory} Category</h4>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" exact to="/category/world">World</Link>
                    <Link className="p-2 text-muted" exact to="/category/environment">Environment</Link>
                    <Link className="p-2 text-muted" exact to="/category/technology">Technology</Link>
                    <Link className="p-2 text-muted" exact to="/category/design">Design</Link>
                    <Link className="p-2 text-muted" exact to="/category/culture">Culture</Link>
                    <Link className="p-2 text-muted" exact to="/category/business">Business</Link>
                    <Link className="p-2 text-muted" exact to="/category/politics">Politics</Link>
                    <Link className="p-2 text-muted" exact to="/category/opinion">Opinion</Link>
                    <Link className="p-2 text-muted" exact to="/category/science">Science</Link>
                    <Link className="p-2 text-muted" exact to="/category/health">Health</Link>
                    <Link className="p-2 text-muted" exact to="/category/style">Style</Link>
                    <Link className="p-2 text-muted" exact to="/category/travel">Travel</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;

