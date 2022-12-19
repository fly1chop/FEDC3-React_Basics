import Input from './Input.js';
import styled from '@emotion/styled';
import Button from './Button.js';
import ErrorText from './ErrorText.js';
import useForm from '../hooks/useForm.js';
import CardForm from './CardForm.js';
import Title from './Title.js';

const LoginForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleSubmit, handleChange } = useForm({
    initialValue: {
      name: '',
      password: '',
    },
    onSubmit,
    validate: ({ name, password }) => {
      const newErrors = {};
      if (!name) newErrors.name = 'Please input name';
      if (!password) newErrors.password = 'Please input password';
      return newErrors;
    },
  });

  console.log(values, errors);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type='text'
        name='name'
        placeholder='Name'
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type='password'
        name='password'
        placeholder='Password'
        style={{ marginTop: 8 }}
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type='submit' disabled={isLoading} style={{ marginTop: 8 }}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
