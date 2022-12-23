import Divider from '../components/Divider/index.js';
import Text from '../components/Text/index.js';

export default {
  title: 'Component/Divider',
  component: Divider,
  argTypes: {
    type: {
      defaultValue: 'horizontal',
      control: {
        type: 'inline-radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
};

export const Horizontal = args => {
  return (
    <>
      <Text>Top</Text>
      <Divider type='horizontal' />
      <Text>Bottom</Text>
    </>
  );
};

export const Vertical = args => {
  return (
    <>
      <Text>Text</Text>
      <Divider type='vertical' />
      <Text>Text</Text>
      <Divider type='vertical' />
      <Text>Text</Text>
      <Divider type='vertical' />
      <Text>Text</Text>
    </>
  );
};
