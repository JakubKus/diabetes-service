import axios from 'axios';
import { FOOD_API } from '../../shared/api-endpoints';
import { SearchResponse } from './search-models';

const createSearchParams = (query: string) => new URLSearchParams({
  query,
  common: 'false',
  detailed: 'true',
});

export const searchFood = (query: string) => axios.get<SearchResponse>(
  `${FOOD_API.SEARCH}?${createSearchParams(query)}`, {
    headers: {
      'x-app-id': process.env.REACT_APP_EXT_API_ID,
      'x-app-key': process.env.REACT_APP_EXT_API_KEY,
    },
  }
);
