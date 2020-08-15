import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function LoggedOutLinks(props) {
    return (
        <div>
            <Nav>
            <LinkContainer to='/signin'>
            <Nav.Link onClick={() => props.setExpanded(false)}>LogIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signup'>
            <Nav.Link onClick={() => props.setExpanded(false)}>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
            <Nav.Link onClick={() => props.setExpanded(false)}>About</Nav.Link>
            </LinkContainer>
            </Nav>
        </div>
    )
}

export default LoggedOutLinks
