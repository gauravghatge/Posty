import React, { useState  } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import {auth,db} from '../Firebase'
import {withRouter} from 'react-router-dom'
const SignUp = (props) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const handlesubmit = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(Email,Password)
        .then(user=>{
            db.doc(`users/${user.user.uid}`).set({
                FirstName,
                LastName
            }) 
            auth.signInWithEmailAndPassword(Email,Password).then(
                user=>{
                    props.history.push('/home')
                }).catch(error=>{
                alert("Error occured while Creating an Account!!")
            })
           
        })
        .catch(err=>{
            alert(err.message)}
            )
    }
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col sm='8'>
                    <Form onSubmit={event => handlesubmit(event)}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text'
                                 required={true}
                                placeholder=" Enter your First Name"
                                value={FirstName} onChange={event => setFirstName(event.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control  
                              required={true}
                            value={LastName} onChange={event => setLastName(event.target.value)} type='text' placeholder=" Enter your Last Name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control   required={true} value={Email} onChange={event => setEmail(event.target.value)} type='email' placeholder=" Enter your Email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={Password} required={true} onChange={event => setPassword(event.target.value)} type='password' placeholder="Enter your Password"></Form.Control>
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(SignUp)
