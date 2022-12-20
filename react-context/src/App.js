import styled from '@emotion/styled';
import Header from './components/Header.js';
import NewTaskForm from './components/NewTaskForm.js';
import TaskList from './components/TaskList.js';
import TaskProvider from './context/TaskProvider.js';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header>To-Do List</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
}

export default App;
