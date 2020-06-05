import axios from 'axios';
import { API } from '../../../shared/api-endpoints';
import { LOCAL_STORAGE } from '../../../shared/local-storage';
import { SearchResultWithNutrients } from '../../../features/search/search-models';

export const addProduct = (product: SearchResultWithNutrients) => {
  const token = localStorage.getItem(LOCAL_STORAGE.LOGIN_TOKEN);
  return axios.post<any>(API.PRODUCTS, {
    name: product.name,
    nutritional: {
      protein: product?.protein,
      fats: product?.fat,
      carbohydrates: product?.carbs,
      salt: product?.sodium,
      calories: product?.calories,
    },
    dateadded: new Date().toLocaleString(),
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}
