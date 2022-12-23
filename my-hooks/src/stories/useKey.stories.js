import useKey from '../hooks/useKey.js';

export default {
  title: 'Hook/useKey',
};

export const Default = () => {
  useKey('keydown', 'f', () => {
    alert('f key down!');
  });

  return <>useKey</>;
};
