import styled from '@emotion/styled';
import { useTasks } from '../context/TaskProvider.js';
import Toggle from './Toggle.js';

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const Task = ({ id, content, complete, ...props }) => {
  const { updateTask, removeTask } = useTasks();

  return (
    <ListItem {...props}>
      <Toggle
        on={complete}
        onChange={e => {
          updateTask(id, e.target.checked);
        }}
      />
      <Content style={{ textDecoration: complete ? 'line-through' : 'none' }}>
        {content}
      </Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

export default Task;
