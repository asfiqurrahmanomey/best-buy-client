import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // * Create User * //
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // * SignIn  User * //
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
// * Observer * //
useEffect(() =>{
    onAuthStateChanged(auth, currentUser => {
        console.log('User state changed');
        setUser(currentUser);
    })
},[])
    const authInfo = {
        createUser,
        signIn,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;