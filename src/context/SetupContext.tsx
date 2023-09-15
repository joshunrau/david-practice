import React, { createContext, useState } from 'react';
import { UsersDatabase } from '../utils/users-database';

export type SetupState = {
  isSetup: boolean;
  setIsSetup: (isSetup: boolean) => void;
};

export const SetupContext = createContext<SetupState>(null!);

export const SetupContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSetup, setIsSetup] = useState(() => {
    return UsersDatabase.getUsers().length !== 0;
  });

  return <SetupContext.Provider value={{ isSetup, setIsSetup }}>{children}</SetupContext.Provider>;
};
