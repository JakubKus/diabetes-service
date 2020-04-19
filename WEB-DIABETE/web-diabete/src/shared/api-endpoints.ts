const apiUrl = 'https://localhost:5001';
const foodApiUrl = 'https://trackapi.nutritionix.com/v2';

export const API = {
  LOGIN: `${apiUrl}/api/auth/login`,
  REGISTER: `${apiUrl}/api/auth/register`,
  PRODUCTS: `${apiUrl}/api/products`,
};

export const FOOD_API = {
  SEARCH: `${foodApiUrl}/search/instant`,
};
