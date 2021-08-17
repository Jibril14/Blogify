import React from 'react';
import classes from './NavigationBar.module.css';
import NavListItem from './NavListItem';


const navigationBar =() =>(
    <ul className={classes.NavigationItems}>
   <NavListItem link="/" > Home </NavListItem>
   <NavListItem link="/category/">News</NavListItem>
   <NavListItem link="/"><i className="fas fa-user"></i>Login</NavListItem>
   <NavListItem link="/contact">Contact</NavListItem>
   
    </ul>
);

export default navigationBar;