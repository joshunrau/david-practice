import { CredentialsForm } from '../../../components/CredentialsForm';

export const LoginPage = () => {
  return (
    <div className="mx-auto mt-10" style={{ width: 350 }}>
      <CredentialsForm
        label="Login"
        onSubmit={() => {
          // sessionStorage.setItem('');
        }}
      />
    </div>
  );
};
