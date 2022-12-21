import Badge from '../components/Badge/index.js';
import Image from '../components/Image/index.js';

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    count: {
      defaultValue: 10,
      control: 'number',
    },
    maxCount: {
      defaultValue: 100,
      control: 'number',
    },
    showZero: {
      defaultValue: false,
      control: 'boolean',
    },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export const Default = args => {
  return (
    <Badge {...args}>
      <Image
        src='https://picsum.photos/60'
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image src='https://picsum.photos/60' width={40} />
    </Badge>
  );
};
