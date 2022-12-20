import styled from '@emotion/styled';
import Task from './Task.js';

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = props => {
  return (
    <UnorderedList {...props}>
      <Task content='Task1' />
      <Task content='Task2' />
      <Task content='Task3' />
    </UnorderedList>
  );
};

export default TaskList;
