import React from 'react';
import {Link } from 'react-router-dom';
import classes from './Logo.module.css';

const logo = (props) =>(
<div className={classes.Logo}>
<Link to='/'><h3  style={{color:"cyan", textDecoration:"none" }}>Blogify</h3></Link>
</div>
);

export default logo;

