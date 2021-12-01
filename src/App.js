import { useState, useEffect } from 'react';
import PublishFilter from './components/PublishFilter';
import './App.css';
import HeadlineFilter from './components/HeadlineFilter';
import StoryCard from './components/StoryCard';

const apiEndpoint = "https://gist.githubusercontent.com/maddoxnelson/b8481ceb3c78e6effe424cdb77c87903/raw/e4ad83b0278103675e135e4732ed9d2a798ff25e/articles.json";

// Steps:
//  1. Fetch the list of articles from apiEndpoint.
//  2. Render each article with a StoryCard component, passing in the following props:
//     - Headline
//     - Section
//     - Published status
//     - Publish time
//     - Authors
//     - URL
//  3. Show only published stories by hooking up the "Published Status" radio buttons
//     in the left-hand sidebar.
//  4. Filter the stories by headline match.

function App() {

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Fetch data here.

  return (
    <div className="App flex">
      <header className="App-header" />
      <div className="left-bar">
        <PublishFilter articles={articles} setFilteredArticles={setFilteredArticles} />
        <HeadlineFilter articles={articles} setFilteredArticles={setFilteredArticles} />
      </div>
      <div>
        {/* Render articles here. */}
      </div>
    </div>
  );
}

export default App;
