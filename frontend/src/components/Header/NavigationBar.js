import React from 'react';
import classes from './NavigationBar.module.css';
import classes2 from './NavListItem.module.css';
import { Link } from 'react-router-dom';

const navigationBar =() =>(
<ul className={classes.NavigationItems}>
   <li link="/" className={classes2.NavigationListItem} ><a href="/">About</a>  </li>
   <li link="/" className={classes2.NavigationListItem}><a href="/Contact/">News</a></li>
   <Link to="/contact"><li style={{color:'white', fontWeight:'bold'}} className={classes2.NavigationListItem}>Contact</li></Link>
</ul>
);

export default navigationBar;