import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { auth } from '../../Firebase'
import {withRouter} from 'react-router-dom'
function LoggedLinks(props) {
    const changehandler=()=>{
        auth.signOut().then(function() {
            props.history.push('/signin')
          }).catch(function(error) {
            console.log(error)
          });
    }
    return (
        <div>
            <Nav>
                <LinkContainer to='/home'>
                    <Nav.Link onClick={() => props.setExpanded(false)} >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/createpost'>
                    <Nav.Link onClick={() => props.setExpanded(false)} >CreatePost</Nav.Link>
                </LinkContainer>
                <Button onClick={changehandler} variant='warning'>Logout</Button>
            </Nav>
        </div>
    )
}

export default withRouter(LoggedLinks)
