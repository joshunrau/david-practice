import { CredentialsForm } from '../../../components/CredentialsForm';
import { UsersDatabase} from '../../../utils/users-database';
import { useNotificationsStore } from '@douglasneuroinformatics/ui';

export const SignUpPage = () => {
  const notification = useNotificationsStore();
  return (
    <div className="mx-auto mt-10" style={{ width: 350 }}>
      <CredentialsForm
        label="Sign up"
        onSubmit={(user) => {
        UsersDatabase.createUser(user),
        notification.addNotification({type:'success', message: 'account created'})
        }}
      />
    </div>
  );
};