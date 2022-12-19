import { useState } from 'react';
import EmojiList from './components/EmojiList/index.js';
import Header from './components/Header/index.js';
import SearchBox from './components/SearchBox/index.js';
import emojiData from './data/emoji.json';

function App() {
  const [keyword, setKeyword] = useState('');
  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiData} keyword={keyword} />
    </div>
  );
}

export default App;
