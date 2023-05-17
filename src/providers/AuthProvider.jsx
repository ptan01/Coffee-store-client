import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth' ;
import app from '../firebase/firebase.config';


 
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email , pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const loginUser = (email, pass)=> {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = ()=> {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (logedUser)=>{
            setUser(logedUser)
            console.log(logedUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])


    const authInfo = {
     createUser,
     loginUser,
     user,
     logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;