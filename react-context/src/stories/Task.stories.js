import Task from '../components/Task.js';

export default {
  title: 'Component/Task',
  component: Task,
};

export const Default = () => {
  const task = {
    content: 'Go to gym',
    complete: false,
  };
  return <Task {...task} />;
};
