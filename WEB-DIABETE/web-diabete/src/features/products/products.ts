import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { ProductsState } from './products-models';
import { Product } from 'shared/models/product';
import { getProducts } from './getProducts';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    userProducts: [],
  } as ProductsState,
  reducers: {
    _handleProductsResponse: (state: ProductsState, action: PayloadAction<Product[]>) => {
      state.userProducts = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: { products: ProductsState }) => state.products.userProducts;
const { _handleProductsResponse } = productsSlice.actions;

export const handleGetProducts = (): AppThunk => async dispatch => {
  try {
    const searchResponse = await getProducts();
    dispatch(_handleProductsResponse(searchResponse.data))
  } catch (e) {
    console.error(new Error(e).message);
  }
};
