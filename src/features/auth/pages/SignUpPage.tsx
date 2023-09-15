import { CredentialsForm } from '../../../components/CredentialsForm';
import { UsersDatabase} from '../../../utils/users-database';

export const SignUpPage = () => {
  return (
    <div className="mx-auto mt-10" style={{ width: 350 }}>
      <CredentialsForm
        label="Sign up"
        onSubmit={(user) => {
        UsersDatabase.createUser(user);
        }}
      />
    </div>
  );
};