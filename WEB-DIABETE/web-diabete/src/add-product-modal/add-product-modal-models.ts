import { SearchResultWithNutrients } from 'shared/models/search-result-with-nutrients';
import { ProductBase } from 'shared/models/product';

export interface AddProductModalModel {
  productData?: SearchResultWithNutrients;
  closeModal: () => void;
}

export interface AddProductRequest extends ProductBase {}
