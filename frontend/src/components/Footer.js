import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ()=>{
return (
    <div>
       <footer>
        <Container  className="bg-footercol text-white fliud pt-3 ">
          <Row >
            <Col className="text-center py-3">
              Copyright &copy; BLOGIFY.
            </Col>
          
            <Col className="text-center py-3">
            All Rights Reserved.
            </Col>
          </Row>
        </Container>
       </footer>
    </div>
  );
}

export default Footer;