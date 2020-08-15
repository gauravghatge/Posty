import React, { useState,useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LoggedLinks from './LoggedLinks'
import LoggedOutLinks from './LoggedOutLinks'
import firebase from '../../Firebase'

function MainNav() {
    const [expanded, setExpanded] = useState(false);
    const [auth, setAuth] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    })
  }, [])
    return (
        <div>
            <Navbar expanded={expanded} fixed="top" size="lg" expand='lg' bg="dark" variant="dark" className="mb-2">
                <img
                    src="/logo.jpg"
                    width="55"
                    height="45"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand className="ml-2">POSTY</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="res-nav"></Navbar.Toggle>
                <Navbar.Collapse id="res-nav" >
                    <Nav className="ml-auto">
                     {auth&&auth?<LoggedLinks props={setExpanded} />: <LoggedOutLinks props={setExpanded} />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default MainNav