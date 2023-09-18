import React, { createContext, useState } from 'react';
import { UsersDatabase } from '../utils/users-database';

export type LoginState = {
  isLoggedIn: boolean;
  setIsLoggedIn (isLoggedIn: boolean) => void;
};

export const LoginContext= createContext<LoginState>(null!);

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    
    return UsersDatabase.getUsers().length !== 0;
  });

  return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>;
};