import React, { createContext, ReactNode, useState } from 'react';
import { fakeAuthProvider } from '../api/auth';

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const signIn = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback: () => void) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
