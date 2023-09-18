import { useNotificationsStore } from '@douglasneuroinformatics/ui';
import { useContext } from 'react';
import { CredentialsForm, CredentialsFormData } from '../../../components/CredentialsForm';
import { LoginContext } from '../../../context/LoginContext';
import { UsersDatabase } from '../../../utils/users-database';


export const LoginPage = () => {
  const notification = useNotificationsStore();
  const loginContext = useContext(LoginContext);

  const handleSubmitForm = (userData: CredentialsFormData) => {
    if(!UsersDatabase.isUser(userData.username)){
      notification.addNotification({type:'warning', message: 'user does not exist'})
    }
    else{
      notification.addNotification({type:'success', message: 'successfully logged in'})
      UsersDatabase.createUser(userData);
      loginContext.setIsLoggedIn(true);
      
    }
   
  };

  return (
    <div className="mx-auto mt-10" style={{ width: 350 }}>
      <CredentialsForm

        label="Login"
        onSubmit={
          handleSubmitForm
        }
      />
      <p className="mt-10">Don't have a account? sign up <a className="text-blue-600 hover:opacity-40" href="/auth/signup">here</a></p>
    </div>
  );
};
