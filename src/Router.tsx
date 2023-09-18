import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './features/home';
import { Layout } from './components/Layout';
import { SetupPage } from './features/setup';

import { match, P } from 'ts-pattern';
import { useContext } from 'react';
import { SetupContext } from './context/SetupContext';
import { LoginPage } from './features/auth';
import { AdminPage } from './features/admin';
import { LoginContext } from './context/LoginContext';
import { SignUpPage } from './features/auth/pages/SignUpPage';

export const Router = () => {
  const setupContext = useContext(SetupContext);
  return (
    <BrowserRouter>
      {match(setupContext)
        .with({ isSetup: true }, () => (
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="auth/login" element={<LoginPage />} />
              {match(LoginContext)
              .with({isLoggedIn: true}, ()=> 
               <Route path="admin" element={<AdminPage />} />)
              .otherwise(
                () => (
                  <Route path="auth/login" element={<LoginPage />} />
                )
               )}
               <Route path="auth/signup" element={<SignUpPage/>}/>
              {/* <Route path="admin" element={<AdminPage />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        ))
        .otherwise(() => (
          <Routes>
            <Route>
              <Route path="setup" element={<SetupPage />} />
              <Route path="*" element={<Navigate to="/setup" />} />
            </Route>
          </Routes>
        ))}
    </BrowserRouter>
  );
};
