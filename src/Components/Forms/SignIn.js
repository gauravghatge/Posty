import React,{useState} from 'react'
import {Row,Col, Form,Button ,Container} from 'react-bootstrap'
import {auth} from '../Firebase'
import {withRouter} from 'react-router-dom'
export const SignIn=(props)=>{
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
   const handlesubmit=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(Email,Password).then(
            user=>{
                props.history.push('/home')
            }
        ).catch(
            err=>{
                alert('Email or Password is incorrect!')
            }
        )    
    }
        return (
            <Container >
            <Row className='justify-content-center'>
            <Col sm='8'>
            <Form  onSubmit={event=>handlesubmit(event)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required={true} type='email' placeholder=" Enter your Email" value={Email} onChange={event=>setEmail(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete="off" required={true} type='password' placeholder="Enter your Password" value={Password} onChange={event=>setPassword(event.target.value)}></Form.Control>
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
export default withRouter(SignIn)



