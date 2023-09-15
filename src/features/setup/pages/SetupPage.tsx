import { useContext } from 'react';
import { SetupContext } from '../../../context/SetupContext';
import { CredentialsFormData, CredentialsForm } from '../../../components/CredentialsForm';

import { UsersDatabase } from '../../../utils/users-database';

export const SetupPage = () => {
  const setupContext = useContext(SetupContext);

  const handleSubmitForm = (admin: CredentialsFormData) => {
    UsersDatabase.createUser(admin);
    setupContext.setIsSetup(true);
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-md p-8 border-slate-200 border" style={{ width: 350 }}>
        <h1 className="font-bold text-3xl text-center mt-3 mb-6">Setup</h1>
        <CredentialsForm label="Admin Credentials" onSubmit={handleSubmitForm} />
      </div>
    </div>
  );
};
