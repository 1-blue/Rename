import axios from "axios";

/**
 * 2022/12/05 - "movieDB" axios 인스턴스 ( 영화 / 드라마 패치 용도로 사용 ) ( 기본 URL : https://api.themoviedb.org/3 ) - by 1-blue
 */
const movieDBInstance = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_DB_API_URL,
  withCredentials: false,
  timeout: 10000,
});

export { movieDBInstance };

export {
  apiFetchMovie,
  apiSaerchMovie,
  apiSuggestedMovie,
  apiSimilarMovie,
} from "./movie";

export {
  apiFetchDrama,
  apiSaerchDrama,
  apiSuggestedDrama,
  apiSimilarDrama,
} from "./drama";
