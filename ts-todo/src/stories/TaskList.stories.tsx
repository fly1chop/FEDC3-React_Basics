import TaskList from '../components/TaskList';
import TaskProvider from '../contexts/TaskProvider';

export default {
  title: 'Component/TaskList',
  component: TaskList,
};

export const Default = () => {
  const tasks = [
    {
      id: '1',
      content: 'TODO 1',
      complete: false,
    },
    {
      id: '2',
      content: 'TODO 2',
      complete: false,
    },
    {
      id: '3',
      content: 'TODO 3',
      complete: true,
    },
  ];

  return (
    <TaskProvider initialTasks={tasks}>
      <TaskList />
    </TaskProvider>
  );
};
