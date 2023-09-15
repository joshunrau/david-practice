import { useNotificationsStore } from '@douglasneuroinformatics/ui';
import { CredentialsForm } from '../../../components/CredentialsForm';
import { UsersDatabase } from '../../../utils/users-database';

export const LoginPage = () => {
  const notification = useNotificationsStore();
  return (
    <div className="mx-auto mt-10" style={{ width: 350 }}>
      <CredentialsForm

        label="Login"
        onSubmit={(user) => {
    
          if(!UsersDatabase.isUser(user.username)){
            notification.addNotification({type:'warning', message: 'user does not exist'})
          }
          else{
            
          }
        }}
      />
    </div>
  );
};
