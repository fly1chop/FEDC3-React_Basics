import Spinner from '../components/Spinner/index.js';

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: { type: 'number' },
    },
    color: { control: 'color' },
    loading: {
      defaultValue: true,
      control: 'boolean',
    },
  },
};

export const Default = args => {
  return <Spinner {...args} />;
};
