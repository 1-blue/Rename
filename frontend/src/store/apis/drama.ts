import { serverInstance } from ".";

// type
import type {
  FetchDramasRequest,
  FetchDramasResponse,
  SearchDramasRequest,
  SearchDramasResponse,
  SuggestDramasRequest,
  SuggestDramasResponse,
  SimilarDramasRequest,
  SimilarDramasResponse,
  DetailDramaRequest,
  DetailDramaResponse,
} from "../types";

/**
 * 2022/12/15 - 특정 카테고리의 드라마들 요청 - by 1-blue
 * @param category 인기, 최신 등
 * @param language 언어
 * @returns 특정 카테고리의 드라마들
 */
const apiFetchDramas = async ({
  category,
  language = "ko-kr",
}: FetchDramasRequest) =>
  await serverInstance.get<FetchDramasResponse>(`/api/drama`, {
    params: { category, language },
  });

/**
 * 2022/12/15 - 드라마 검색 요청 - by 1-blue
 * @param title 드라마 제목
 * @returns 검색된 드라마
 */
const apiSearchDramas = async ({
  title,
  language = "ko-kr",
}: SearchDramasRequest) =>
  await serverInstance.get<SearchDramasResponse>(`/api/drama/search`, {
    params: { title, language },
  });

/**
 * 2022/12/15 - 추천 드라마 검색어 요청 - by 1-blue
 * @param title 드라마 제목 ( 전체 or 일부분 )
 * @returns 검색된 추천 드라마 검색어들
 */
const apiSuggestedDramas = async ({
  keyword,
  language = "ko-kr",
}: SuggestDramasRequest) =>
  await serverInstance.get<SuggestDramasResponse>(`/api/drama/suggested`, {
    params: { keyword, language },
  });

/**
 * 2022/12/15 - 유사 드라마 검색어 요청 - by 1-blue
 * @param movieId "MovieDB"에서 받은 드라마 식별자
 * @returns 유사한 드라마들
 */
const apiSimilarDramas = async ({
  dramaIdx,
  language = "ko-kr",
}: SimilarDramasRequest) =>
  await serverInstance.get<SimilarDramasResponse>(`/api/drama/similar`, {
    params: { dramaIdx, language },
  });

/**
 * 2022/12/31 - 특정 드라마 상세 정보 요청 - by 1-blue
 * @param dramaIdx "MovieDB"에서 받은 드라마 식별자
 * @returns 특정 드라마 상세 정보
 */
const apiDetailDrama = async ({
  dramaIdx,
  language = "ko-kr",
}: DetailDramaRequest) =>
  await serverInstance.get<DetailDramaResponse>(`/api/drama/detail`, {
    params: { dramaIdx, language },
  });

/**
 * 2022/12/17 - 드라마 api 요청 메서드들을 갖는 객체 - by 1-blue
 */
export const dramaApiService = {
  apiFetchDramas,
  apiSearchDramas,
  apiSuggestedDramas,
  apiSimilarDramas,
  apiDetailDrama,
};
