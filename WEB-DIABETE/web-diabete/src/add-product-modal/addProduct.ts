import axios from 'axios';
import { API } from 'shared/api-endpoints';
import { LOCAL_STORAGE } from 'shared/local-storage';
import { SearchResultWithNutrients } from 'shared/models/search-result-with-nutrients';
import { AddProductRequest } from './add-product-modal-models';

export const addProduct = (product: SearchResultWithNutrients) => {
  const token = localStorage.getItem(LOCAL_STORAGE.LOGIN_TOKEN);
  return axios.post(API.PRODUCTS, {
    name: product.name,
    nutritional: {
      protein: product.protein ?? 0,
      carbohydrates: product.carbs ?? 0,
      fats: product.fat ?? 0,
      salt: product.sodium ?? 0,
      calories: product.calories ?? 0,
      weight: product.grams ?? 0,
    },
    dateAdded: new Date(),
  } as AddProductRequest, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
