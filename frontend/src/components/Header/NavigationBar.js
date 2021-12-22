import React from 'react';
import classes from './NavigationBar.module.css';
import classes2 from './NavListItem.module.css';

const navigationBar =() =>(
<ul className={classes.NavigationItems}>
   <li link="/" className={classes2.NavigationListItem} ><a href="/">About</a>  </li>
   <li link="/Contact/" className={classes2.NavigationListItem}><a href="/Contact/">News</a></li>
   <li className={classes2.NavigationListItem}><a href="/contact/">Contact</a></li>
</ul>
);

export default navigationBar;