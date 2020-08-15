import React, { useEffect, useState } from 'react';
import './App.css';
import MainNav from './Components/Main/NavBar/MainNav'
import { Redirect, BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext';
import SignUp from './Components/Forms/SignUp';
import MainFrame from './Components/Main/MainFrame';
import CreatePost from './Components/Main/CreatePost';
import { SignIn } from './Components/Forms/SignIn';
import firebase from './Components/Firebase'
import { About } from './Components/About';

function App() {
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
    <AuthProvider>
      <div className="App">
        <Router>
          <MainNav />
          <Route exact path='/' render={() => (
            auth ? <MainFrame /> : <Redirect to='/signin' />
          )} />
          <Route path='/home' render={() => (
            auth ? <MainFrame /> : <Redirect to='/signin' />
          )} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={About} />
          <Route path='/createpost' render={() => (
            auth ? <CreatePost /> : <Redirect to='/signin' />
          )} />
        </Router>
      </div>
    </AuthProvider>

  );
}


export default App;
