namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NODE_ENV: "development" | "production";

    MOVIE_DB_API_URL: string;
    MOVIE_DB_API_KEY: string;

    KAKAO_API_URL: string;
    KAKAO_API_KEY: string;

    AWS_BUCKET: string;
    AWS_REGION: string;
    AWS_ACCESS_KEY: string;
    AWS_ACCESS_SECRET_KEY: string;
  }
}
