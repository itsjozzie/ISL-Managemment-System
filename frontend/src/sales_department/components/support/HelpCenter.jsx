import React, { useState, useEffect } from 'react';
import './HelpCenter.scss';

const HelpCenter = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch help center articles from API
    // Placeholder for API call
    setArticles([
      { id: 1, title: 'How to manage your budget', date: '2024-08-01' },
      { id: 2, title: 'Understanding financial reports', date: '2024-08-10' },
    ]);
  }, []);

  return (
    <div className="help-center">
      <h1>Help Center</h1>
      <div className="article-list">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>Date: {article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
