import React, { createContext, useState } from 'react';
import { User, UsersDatabase } from '../utils/users-database';

export type LoginState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const LoginContext= createContext<LoginState>(null!);

export const LoginContextProvider = ({ children, user, }: { children: React.ReactNode, user?: User }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(user) && UsersDatabase.isUser(user.username)); 

  return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>;
};