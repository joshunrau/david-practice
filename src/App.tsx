import { NotificationHub } from '@douglasneuroinformatics/ui';

import { Router } from './Router';
import { SetupContextProvider } from './context/SetupContext';
import { LoginContextProvider } from './context/LoginContext';

export const App = () => {
  return (
    <SetupContextProvider>
    
        <NotificationHub />
        <Router>
        <LoginContextProvider></LoginContextProvider>
        </Router>
    </SetupContextProvider>
    
  );
};
