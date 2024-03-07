import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (email, password) => {
    console.log(`Signing in with ${email} and password ${password}`); 
    setIsAuthenticated(true);
  };

  const signUp = (email, password) => {
    console.log(`Signing up with ${email} and password ${password}`);
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false); 
  };

  return (
<AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
