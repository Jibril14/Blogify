import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/blog/${slug}`);
                setBlog(res.data);
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

    const createBlog = () => {
        return {__html: blog.content};
    };

    return (
        <div className='container mt-3'>
            <h2 className='display-2'>{blog.title}</h2>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4 className=''>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5"><Link to='/blog' className="font-weight-bold">Back to Blogs</Link></p>
        </div>
    );
}

export default BlogDetail;
