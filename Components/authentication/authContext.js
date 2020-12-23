import React, { useState, createContext, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      // firebase.auth().onAuthStateChanged(setUser);
    });
  }, []);
  console.log(user);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
