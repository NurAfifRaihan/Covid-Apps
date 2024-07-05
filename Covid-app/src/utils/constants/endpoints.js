const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.NEWS_API_KEY;

const ENDPOINTS = {
    NEWS : `${BASE_URL}/everything?q=keyword&apiKey=${API_KEY}`
};

export default ENDPOINTS;