import { useState } from 'react';
import Progress from '../components/Progress/index.js';

export default {
  title: 'Component/Progress',
  component: Progress,
  argTypes: {
    height: { control: { type: 'range', min: 16, max: 36 } },
  },
};

export const Default = args => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button onClick={() => setValue(100)}>Change Value</button>
      <Progress {...args} value={value} />
    </div>
  );
};
