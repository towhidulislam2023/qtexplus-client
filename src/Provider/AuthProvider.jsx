/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProviderContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const registarUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserinfo = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const handelGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handelGithubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
    }




    const authInfo = {
        registarUser,
        user,
        updateUserinfo,
        loginUser,
        logout,
        handelGoogleLogin,
        handelGithubLogin,
        loading
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser && currentUser?.email) {
                const logedUser = {
                    email: currentUser?.email
                }
                fetch("https://qtexplus-doctor-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(logedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.token);
                        localStorage.setItem("token-for",data.token)
                        setUser(currentUser)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem("token-for")
                setUser(currentUser)
                setLoading(false)
            }



        })
        return () => {
            return unsubscribe
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;