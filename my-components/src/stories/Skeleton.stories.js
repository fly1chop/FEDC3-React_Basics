import Skeleton from '../components/Skeleton/index.js';

export default {
  title: 'Component/Skeleton',
};

export const Box = args => <Skeleton.Box {...args} />;
Box.argTypes = {
  width: { defaultValue: 200, control: 'number' },
  height: { defaultValue: 100, control: 'number' },
};

export const Circle = args => <Skeleton.Circle {...args} />;
Circle.argTypes = {
  size: { defaultValue: 100, control: 'number' },
};

export const Paragraph = args => <Skeleton.Paragraph {...args} />;
Paragraph.argTypes = {
  line: { defaultValue: 3, control: 'number' },
};

export const Sample = () => {
  return (
    <>
      <Skeleton.Circle size={60} />
      <Skeleton.Paragraph line={5} />
    </>
  );
};
