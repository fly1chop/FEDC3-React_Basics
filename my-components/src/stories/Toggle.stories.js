import Toggle from '../components/Toggle/index.js';

export default {
  title: 'Component/Toggle',
  component: Toggle,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Default = args => {
  return <Toggle {...args} />;
};
