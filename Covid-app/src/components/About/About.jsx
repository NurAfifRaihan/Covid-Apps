import { useState, useEffect } from 'react';
import StyledAbout from './About.module';

function Berita() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = 'hpqpqY8RkrPRulWKdXP5vHKmtuGu93Mje7KtW20GXMcHJMP1'; // Ganti dengan API key Anda dari Currents
        const response = await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news articles');
        }
        const data = await response.json();
        setArticles(data.news);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news articles:', error);
        setLoading(false);
        setError('Failed to fetch news articles');
      }
    };

    fetchArticles();
  }, []);

  return (
    <StyledAbout>
      <div className="container">
        <div className="header">Random News in the World</div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="article">
              <div className="title">{article.title}</div>
              <div className="description">{article.description}</div>
              <div className="source">{article.author}</div>
            </div>
          ))
        )}
      </div>
    </StyledAbout>
  );
}

export default Berita;
