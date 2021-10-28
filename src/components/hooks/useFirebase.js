import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('')

    const auth = getAuth();


    const signInEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const registerEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        setUser,
        signInUsingGoogle,
        registerEmailAndPassword,
        signInEmailAndPassword,
        logOut,
        isLoading,
        setIsLoading,
        error,
        setError,
        name,
        setName,
        userName
    }
}

export default useFirebase;