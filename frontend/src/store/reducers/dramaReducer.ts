import { createSlice } from "@reduxjs/toolkit";

// thunk
import { dramaThunkService } from "../thunks";

// type
import type { DetailDrama, Drama } from "../types";

interface DramaState {
  popular: Drama[];
  top_rated: Drama[];
  on_the_air: Drama[];

  searchedDramas: Drama[];
  suggestedDramas: string[];
  similarDramas: Drama[];

  detailDrama: DetailDrama | null;

  // 특정 카테고리의 드라마들 요청
  fetchDramasLoading: boolean;
  fetchDramasDone: null | string;
  fetchDramasError: null | string;

  // 드라마 검색
  searchDramasLoading: boolean;
  searchDramasDone: null | string;
  searchDramasError: null | string;

  // 추천 검색어
  suggestedDramasLoading: boolean;
  suggestedDramasDone: null | string;
  suggestedDramasError: null | string;

  // 유사 검색어
  similarDramasLoading: boolean;
  similarDramasDone: null | string;
  similarDramasError: null | string;

  // 특정 드라마 상세 정보
  detailDramaLoading: boolean;
  detailDramaDone: null | string;
  detailDramaError: null | string;
}

const initialState: DramaState = {
  popular: [],
  top_rated: [],
  on_the_air: [],
  searchedDramas: [],
  suggestedDramas: [],
  similarDramas: [],

  detailDrama: null,

  fetchDramasLoading: false,
  fetchDramasDone: null,
  fetchDramasError: null,

  searchDramasLoading: false,
  searchDramasDone: null,
  searchDramasError: null,

  suggestedDramasLoading: false,
  suggestedDramasDone: null,
  suggestedDramasError: null,

  similarDramasLoading: false,
  similarDramasDone: null,
  similarDramasError: null,

  detailDramaLoading: false,
  detailDramaDone: null,
  detailDramaError: null,
};

const dramaSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    resetMessage(state) {
      state.fetchDramasLoading = false;
      state.fetchDramasDone = null;
      state.fetchDramasError = null;

      state.searchDramasLoading = false;
      state.searchDramasDone = null;
      state.searchDramasError = null;

      state.suggestedDramasLoading = false;
      state.suggestedDramasDone = null;
      state.suggestedDramasError = null;

      state.similarDramasLoading = false;
      state.similarDramasDone = null;
      state.similarDramasError = null;

      state.detailDramaLoading = false;
      state.detailDramaDone = null;
      state.detailDramaError = null;
    },
  },

  // "thunk"가 적용된 액션 ( 비동기 액션 )
  extraReducers(builder) {
    // 특정 카테고리의 드라마들 요청
    builder.addCase(dramaThunkService.fetchDramasThunk.pending, (state) => {
      state.fetchDramasLoading = true;
    });
    builder.addCase(
      dramaThunkService.fetchDramasThunk.fulfilled,
      (state, action) => {
        state.fetchDramasLoading = false;
        state.fetchDramasDone = action.payload.data.message;
        state[action.meta.arg.category] = action.payload.data.dramas;
      }
    );
    builder.addCase(
      dramaThunkService.fetchDramasThunk.rejected,
      (state, action) => {
        state.fetchDramasLoading = false;
        if (action.payload?.message) {
          state.fetchDramasError = action.payload.message;
        }

        console.error("fetchDramas >> ", action);
      }
    );

    // 드라마 검색
    builder.addCase(dramaThunkService.searchDramasThunk.pending, (state) => {
      state.searchDramasLoading = true;
    });
    builder.addCase(
      dramaThunkService.searchDramasThunk.fulfilled,
      (state, action) => {
        state.searchDramasLoading = false;
        state.searchDramasDone = action.payload.data.message;
        state.searchedDramas = action.payload.data.dramas;
      }
    );
    builder.addCase(
      dramaThunkService.searchDramasThunk.rejected,
      (state, action) => {
        state.searchDramasLoading = false;
        if (action.payload?.message) {
          state.searchDramasError = action.payload.message;
        }

        console.error("searchDrama >> ", action);
      }
    );

    // 추천 드라마 검색어
    builder.addCase(dramaThunkService.suggestedDramasThunk.pending, (state) => {
      state.suggestedDramasLoading = true;
    });
    builder.addCase(
      dramaThunkService.suggestedDramasThunk.fulfilled,
      (state, action) => {
        state.suggestedDramasLoading = false;
        state.suggestedDramasDone = action.payload.data.message;
        state.suggestedDramas = action.payload.data.titles;
      }
    );
    builder.addCase(
      dramaThunkService.suggestedDramasThunk.rejected,
      (state, action) => {
        state.suggestedDramasLoading = false;
        if (action.payload?.message) {
          state.suggestedDramasError = action.payload.message;
        }

        console.error("suggestedDrama >> ", action);
      }
    );

    // 유사 드라마 검색
    builder.addCase(dramaThunkService.similarDramasThunk.pending, (state) => {
      state.similarDramasLoading = true;
    });
    builder.addCase(
      dramaThunkService.similarDramasThunk.fulfilled,
      (state, action) => {
        state.similarDramasLoading = false;
        state.similarDramasDone = action.payload.data.message;
        state.similarDramas = action.payload.data.dramas;
      }
    );
    builder.addCase(
      dramaThunkService.similarDramasThunk.rejected,
      (state, action) => {
        state.similarDramasLoading = false;
        if (action.payload?.message) {
          state.similarDramasError = action.payload.message;
        }

        console.error("suggestedDrama >> ", action);
      }
    );

    // 특정 영화 상세 정보 요청
    builder.addCase(dramaThunkService.detailDramaThunk.pending, (state) => {
      state.detailDramaLoading = true;
    });
    builder.addCase(
      dramaThunkService.detailDramaThunk.fulfilled,
      (state, action) => {
        state.detailDramaLoading = false;
        state.detailDramaDone = action.payload.data.message;
        state.detailDrama = action.payload.data.drama;
      }
    );
    builder.addCase(
      dramaThunkService.detailDramaThunk.rejected,
      (state, action) => {
        state.detailDramaLoading = false;
        if (action.payload?.message) {
          state.detailDramaError = action.payload.message;
        }

        console.error("detailMovie >> ", action);
      }
    );
  },
});

/**
 * "drama"관련 액션 크리에이터
 */
export const dramaActions = dramaSlice.actions;

export default dramaSlice.reducer;
