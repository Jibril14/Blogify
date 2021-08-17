import React from 'react';
import classes from './Toolbar.module.css';
//import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
//import classes from './Header.module.css';
import Logo from './Logo';
import NavigationBar from './NavigationBar';
import Menu from './Menu';


const toolbar = (props) =>(
    <header className = {classes.Toolbar}>
    <Menu clicked={props.drawerToggleClicked}/>
    
    <div className={classes.Logo}>
            <Logo />
        </div>
    <nav  className={classes.DesktopOnly}>  
    <NavigationBar/>                       
    </nav>

    </header>

);


export default toolbar;