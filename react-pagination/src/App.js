/* eslint-disable */
import { useState } from 'react';
import './App.css';
import Board from './components/Board.js';
import Pagination from './components/Pagination.js';

function App() {
  const [page, setPage] = useState(0);
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번째 게시물`,
  }));

  const limit = 10;
  const offset = page * limit;

  return (
    <>
      <Pagination
        defaultPage={0}
        limit={10}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </>
  );
}

export default App;
