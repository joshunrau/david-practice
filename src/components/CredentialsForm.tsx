import { Form } from '@douglasneuroinformatics/ui';

export type CredentialsFormData = {
  username: string;
  password: string;
};

type CredentialsFormProps = {
  label?: string;
  onSubmit: (data: CredentialsFormData) => void;
};

export const CredentialsForm = ({ label, onSubmit }: CredentialsFormProps) => {
  return (
    <Form<CredentialsFormData>
      content={[
        {
          title: label ?? '',
          fields: {
            username: {
              kind: 'text',
              label: 'Username',
              variant: 'short'
            },
            password: {
              kind: 'text',
              label: 'Password',
              variant: 'password'
            }
          }
        }
      ]}
      validationSchema={{
        type: 'object',
        properties: {
          username: {
            type: 'string',
            minLength: 1
          },
          password: {
            type: 'string',
            minLength: 1
          }
        },
        required: ['username', 'password']
      }}
      onSubmit={onSubmit}
    />
  );
};
