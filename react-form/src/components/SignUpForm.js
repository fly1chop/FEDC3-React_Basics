import Input from './Input.js';
import styled from '@emotion/styled';
import Button from './Button.js';
import ErrorText from './ErrorText.js';
import useForm from '../hooks/useForm.js';
import CardForm from './CardForm.js';
import Title from './Title.js';

const SignUpForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleSubmit, handleChange } = useForm({
    initialValue: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm }) => {
      const newErrors = {};
      if (!name) newErrors.name = 'Please input name';
      if (!password) newErrors.password = 'Please input password';
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = 'Password is not the same';
      return newErrors;
    },
  });

  console.log(values, errors);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
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
      <Input
        type='password'
        name='password-confirm'
        placeholder='Confirm Password'
        style={{ marginTop: 8 }}
        onChange={handleChange}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm}</ErrorText>
      )}
      <Button type='submit' disabled={isLoading} style={{ marginTop: 8 }}>
        Sign Up
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
