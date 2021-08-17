import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';


const layout = (props)=>(
    <div>
        <Navbar/>
           
      
        <main className="py-3">
            <Container>
            {props.children}
            </Container>
        </main>
            <Footer/>
    </div>
);

export default layout;