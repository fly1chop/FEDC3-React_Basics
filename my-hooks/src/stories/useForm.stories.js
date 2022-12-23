import useForm from '../hooks/useForm.js';

export default {
  title: 'Hook/useForm',
};

const sleep = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
};

export const Default = () => {
  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      await sleep();
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      const errors = {};

      if (!email) errors.email = 'Email input required';
      if (!password) errors.password = 'Password input required';

      if (!/^.+@.+\..+$/.test(email)) errors.email = 'Invalid email address';
      return errors;
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div>
        <input
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
        />
        {errors.email}
      </div>
      <div>
        <input
          name='password'
          type='password'
          placeholder='password'
          onChange={handleChange}
        />
        {errors.password}
      </div>
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};
