import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { searchFood } from './searchFood';
import { SearchResponse, SearchResultsState } from './search-models';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: { branded: [] },
  } as SearchResultsState,
  reducers: {
    _handleSearchResults: (state: SearchResultsState, action: PayloadAction<SearchResponse>) => {
      state.searchResults.branded = action.payload.branded;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const selectSearchResults = (state: { search: SearchResultsState }) => state.search.searchResults;
const { _handleSearchResults } = searchSlice.actions;

export const handleSearch = (query: string): AppThunk => async dispatch => {
  try {
    const searchResponse = await searchFood(query);
    dispatch(_handleSearchResults(searchResponse.data))
  } catch (e) {
    console.error(new Error(e).message);
  }
};
