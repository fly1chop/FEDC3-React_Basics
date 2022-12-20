import styled from '@emotion/styled';
import { useState } from 'react';
import { useTasks } from '../context/TaskProvider.js';

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: calc(100% - 60px - 8px);
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid #000;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: #000;
  box-sizing: border-box;
  cursor: pointer;
`;

const NewTaskForm = props => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input
        type='text'
        value={task}
        onChange={e => setTask(e.target.value)}
        required
      />
      <SubmitButton>Add</SubmitButton>
    </Form>
  );
};

export default NewTaskForm;
