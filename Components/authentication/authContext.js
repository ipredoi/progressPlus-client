import React, { useContext, useState, createContext, useEffect } from 'react';
import app from './firebase';
import firebase from 'firebase/app';

import 'firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
    });
    // app.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
