import React from 'react';
import Logo from './Logo';
import classes2 from './NavListItem.module.css';
import classes from './SideDrawer.module.css';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom';


const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                <Logo />
            </div>
               
                <div>
                    <nav>
                        <ul className={classes.NavigationItems}>
                            <Link to="/" style={{ color: "red",}} className={classes2.NavigationListItem}>About </Link>
                            <Link to="/category/" style={{ color: "red",}} className={classes2.NavigationListItem}>News</Link>
  
                            <Link to="/contact" style={{ color: "red",}} className={classes2.NavigationListItem}>Contact</Link>
   
                        </ul>
                    </nav>
                </div>


                <div className={classes.NavigationItems}>
                <nav className="nav  justify-content-between">
                    <Link className="p-2 m-1 btn-danger" to="/category/world">World</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/environment">Environment</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/technology">Technology</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/design">Design</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/culture">Culture</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/business">Business</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/politics">Politics</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/opinion">Opinion</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/science">Science</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/health">Health</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/style">Style</Link>
                    <Link className="p-2 m-1  btn-danger" to="/category/travel">Travel</Link>
                </nav>
              </div>
            </div>
        </div>  

    )
};

export default sideDrawer;