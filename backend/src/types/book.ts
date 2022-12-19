import type { ApiResponse } from "./index";

/**
 * 2022/12/18 - 책 타입 - by 1-blue
 */
type Book = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

/**
 * 2022/12/18 - 책 검색 수신 타입 ( B -> kakao ) - by 1-blue
 */
type ReceiveBook = {
  documents: Book[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

// ============================== 도서 검색 관련 ==============================
/**
 * 2022/12/18 - 도서들 검색 api 요청 송신 타입 ( B -> "Kakao" ) - by 1-blue
 */
export type ApiSearchBooksRequest = {
  title: string;
};
/**
 * 2022/12/18 - 도서들 검색 api 요청 수신 타입 ( "Kakao" -> B ) - by 1-blue
 */
export type ApiSearchBooksResponse = ReceiveBook;
/**
 * 2022/12/18 - 도서들 검색 요청 송신 타입 ( F -> B ) - by 1-blue
 */
export type SearchBooksRequest = ApiSearchBooksRequest;
/**
 * 2022/12/18 - 도서들 검색 요청 수신 타입 ( B -> F ) - by 1-blue
 */
export type SearchBooksResponse = ApiResponse<{ books: Book[] }>;

// ============================== 도서 추천 검색어 관련 ==============================
/**
 * 2022/12/18 - 도서들의 추천 검색어 검색 api 요청 송신 타입 ( B -> "Kakao" ) - by 1-blue
 */
export type ApiSuggestedBooksRequest = {
  keyword: string;
};
/**
 * 2022/12/18 - 도서들 추천 검색어 api 요청 수신 타입 ( "Kakao" -> B ) - by 1-blue
 */
export type ApiSuggestedBooksResponse = ReceiveBook;
/**
 * 2022/12/18 - 드라마들 추천 검색어 검색 요청 송신 타입 ( F -> B ) - by 1-blue
 */
export type SuggestedBooksRequest = ApiSuggestedBooksRequest;
/**
 * 2022/12/18 - 드라마들 추천 검색어 검색 요청 수신 타입 ( B -> F ) - by 1-blue
 */
export type SuggestedBooksResponse = ApiResponse<{ titles: string[] }>;

// ============================== 유사 도서 관련 ==============================
/**
 * 2022/12/18 - 유사 도서들 api 요청 송신 타입 ( B -> "Kakao" ) - by 1-blue
 * ( 같은 저자 )
 */
export type ApiSimilarBooksRequest = {
  author: string;
};
/**
 * 2022/12/18 - 유사 도서들 api 요청 수신 타입 ( "Kakao" -> B ) - by 1-blue
 */
export type ApiSimilarBooksResponse = ReceiveBook;
/**
 * 2022/12/18 - 유사 도서들 요청 송신 타입 ( F -> B ) - by 1-blue
 */
export type SimilarBooksRequest = ApiSimilarBooksRequest;
/**
 * 2022/12/18 - 유사 도서들 요청 수신 타입 ( B -> F ) - by 1-blue
 */
export type SimilarBooksResponse = ApiResponse<{ books: Book[] }>;
