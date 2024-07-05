import { useState, useEffect } from 'react';
import StyledAbout from './About.module';
import ENDPOINTS from '../../utils/constants/endpoints';

function Berita () {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(ENDPOINTS.NEWS);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news articles:', error);
        setLoading(false);
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
      ) : (
        articles.map((article, index) => (
          <div key={index} className="article">
            <div className="title">{article.title}</div>
            <div className="description">{article.description}</div>
          </div>
        ))
      )}
    </div>
    </StyledAbout>
  );
}

export default Berita;
