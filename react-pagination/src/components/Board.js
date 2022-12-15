import PropTypes from 'prop-types';

const Board = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          {article.id} | {article.title}
        </li>
      ))}
    </ul>
  );
};

Board.protoTypes = {
  articles: PropTypes.array,
};

export default Board;
