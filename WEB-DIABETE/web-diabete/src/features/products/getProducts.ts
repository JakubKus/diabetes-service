import axios from 'axios';
import { Product } from 'shared/models/product';
import { API } from 'shared/api-endpoints';
import { LOCAL_STORAGE } from 'shared/local-storage';

export const getProducts = () => {
  const token = localStorage.getItem(LOCAL_STORAGE.LOGIN_TOKEN);

  return axios.get<Product[]>(API.PRODUCTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
