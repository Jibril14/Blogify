import React, {Component} from 'react';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import Toolbar from '../components/Header/Toolbar';
import SideDrawer from '../components/Header/SideDrawer';


class Layout extends Component {
   

        state = {
            showSideDrawer: false,
            showSearchBox: false,
        }
       
        sideDrawerClosedHandler = () => {
            this.setState( { showSideDrawer: false } );
        }


        ToggleHandler = () => {
            this.setState( ( prevState ) => {
                return { showSideDrawer: !prevState.showSideDrawer };
            } );
        }

      

        searchBoxToggleHandler = () => {
            this.setState( ( prevState ) => {
                return { showSearchBox: !prevState.showSearchBox };
            } );
        }

    render(){
     return(
      
     <div>
        <Toolbar toggle={this.ToggleHandler} open={this.searchBoxToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>     
        
        <main className="main">
            <Container>
              {this.props.children}
            </Container>
        </main>

        <Footer/>
      </div>
           
  )
}

      
   
};

export default Layout;