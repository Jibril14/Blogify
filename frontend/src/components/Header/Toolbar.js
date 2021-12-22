import React from 'react';
import classes from './Toolbar.module.css';
//import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
//import classes from './Header.module.css';
import Logo from './Logo';
import NavigationBar from './NavigationBar';
import Menu from './Menu';
import Searchbox from './Searchbox';

// <Menu clicked={props.drawerToggleClicked}/>
// <div className={classes.Logo}>
//   <Logo /></div>

const toolbar = (props) =>(
  
  <div className = {classes.Toolbar}>
    <div style={{width: '80%', height: '100%'}}> <Logo /></div>
      <div style={{margin:'15px'}} className={classes.Searchbox}><Searchbox clicked={props.open} /> </div> 
        <div className={classes.HideToggle}>
          <Menu  clicked={props.toggle} />
          <Menu  clicked={ props.toggle}/>
          <Menu  clicked={props.toggle} />
        </div> 
   
    <nav className={classes.DesktopOnly}>

      <NavigationBar/>
    </nav>

  </div>
    
);


export default toolbar;