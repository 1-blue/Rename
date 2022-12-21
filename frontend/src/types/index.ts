/**
 * 2022/12/05 - 아이콘 형태 타입 - by 1-blue
 */
export type IconShape = "search" | "arrowDown" | "plus" | "change";

/**
 * 2022/12/16 - 검색 카테고리 - by 1-blue
 */
export type SearchCategory = "movie" | "drama" | "book";

/**
 * 2022/12/19 - 게시글 카테고리 - by 1-blue
 */
export type PostCategory = "MOVIE" | "DRAMA" | "BOOK";

/**
 * 2022/12/19 - 세션 스토리지에 저장할 데이터 타입 - by 1-blue
 * 특정 게시글 페이지 이동 or 특정 게시글 작성 페이지 이동 시 데이터 저장 ( 새로고침 시 유지하기 위함... redux는 날아감 )
 */
export type SStorageData = {
  id: string;
  category: string;
  title: string;
  description: string;
  paths: string[];
  date: string;
};
