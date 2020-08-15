import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Posts from './Posts'
export const MainFrame =()=> {

            return (
                <Container>
                    <Row>
                      <Col md='8'>
                      <Posts />
                      </Col>
                      <Col md="4"></Col>
                    </Row>
                </Container>
          )  
        
      
    }
export default MainFrame
