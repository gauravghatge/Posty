import React, { useState, useEffect, useContext} from 'react'
import {createContext} from 'react'
import firebase from '../Components/Firebase'

export const AuthContext=createContext()

export function AuthProvider(props) {
    const [auth,setAuth]=useState({isLogged:false})
    const [user,setUser]=useState({user:null})
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              setAuth({isLogged:true})
              setUser({user})
            } else {
              setAuth({isLogged:false})
            }
          })
    },[])
    return (
            <AuthContext.Provider value={{auth,user}}>
                {props.children}
            </AuthContext.Provider>
    )
}
export const useAuthContext=()=>useContext(AuthContext)
