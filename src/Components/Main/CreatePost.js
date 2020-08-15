import React,{useState,useContext} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {db} from '../Firebase'
import {withRouter} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

function CreatePost(props) {
    const [Title, setTitle] = useState('')
    const [Post, setPost] = useState('')
    const {user} =useContext(AuthContext)
    const handlesubmit = (event) => {
        event.preventDefault()
        db.doc(`/users/${user.user.uid}`).get().then(
            doc=>{
                db.collection("Posts").add({
                    Title,Post,CreatedAt:new Date().toDateString(),Name:doc.data().FirstName+" "+doc.data().LastName
                })
                .then(
                    props.history.push('/home')
                )
                .catch(err=>{console.log(err)})
            }
        )
        
    }
    return (
       <Container>
       <Form onSubmit={event => handlesubmit(event)}>
           <Form.Group>
               <Form.Label>Title for the Post</Form.Label>
               <Form.Control
                value={Title} onChange={event => setTitle(event.target.value)}
               placeholder="Title" type='text'
               required />
           </Form.Group>
           <Form.Group>
               <Form.Label>Write your Post</Form.Label>
               <Form.Control  required value={Post} onChange={event => setPost(event.target.value)} as="textarea" placeholder="Write your Amazing post....." rows='9'></Form.Control>
           </Form.Group>
           <Button variant="warning" type="submit">POST</Button>
       </Form>
       </Container>
    )
}

export default withRouter(CreatePost)
