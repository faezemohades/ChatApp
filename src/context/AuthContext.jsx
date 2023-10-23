import { useContext, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import {createContext,useState} from 'react';
import { auth } from '../firebase';

const AuthContext=createContext();
export const AuthProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState("");
    const [loading,setLoading]=useState(true);

    //sign in with google

    const signinWithGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    }

    //logout
    
    const logout=()=>signOut(auth)


    const value={
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
    }

    useEffect(() => {
      const unsubscribe=onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }, []);

    
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext);
}