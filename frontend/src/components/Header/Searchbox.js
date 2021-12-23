import React, {Component} from 'react';
import classes from './Searchbox.module.css';


class searchbox extends Component{
    state = {
      
        showSearch: false
      }


  toggleSearchHandler = () => {
    const doesShow = this.state.showSearch;
    this.setState( { showSearch: !doesShow } );
  }


  render(){
        const style = {
           
            width: '50px',
            cursor: 'pointer',
           
          };
      
       let inputField = null
          if ( this.state.showSearch ) {
            inputField = (
                <input className={classes.input} type="text" placeholder="Type to Search.." />
            );
          
            style.width = '230px';
           
          }



      return(
            <div style={style} className={classes.searchBox} >
                 <div className={classes.searchBtn} >
                     <i   onClick={this.toggleSearchHandler} className="fas fa-search"
                      style={{color:'black', boxSizing:'border-box', margin: '0', padding: '0'}}></i>
                 </div>
                 {inputField}
             </div>
       
         
        );

  }
   
}

export default searchbox;