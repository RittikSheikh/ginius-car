import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }


    const userUpdateProfile = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: ''
        })
    }




    useEffect(() =>{
        const unsubScribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
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
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;