import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    const userUpdateProfile = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: ''
        })
    }

    const userLogOut = () => {
        return signOut(auth)
    }




    useEffect(() =>{
        const unsubScribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubScribe()
    },[])



    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        userUpdateProfile,
        userLogOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;