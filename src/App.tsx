import { NotificationHub } from '@douglasneuroinformatics/ui';

import { Router } from './Router';
import { SetupContextProvider } from './context/SetupContext';

export const App = () => {
  return (
    <SetupContextProvider>
        <NotificationHub />
        <Router />
    </SetupContextProvider>
  );
};
