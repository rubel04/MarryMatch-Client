import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (data) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: data.image,
    });
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data?.token) {
            localStorage.setItem("token", res.data?.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    loginUserWithGoogle,
    updateUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
