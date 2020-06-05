import { SearchResultWithNutrients } from '../../../features/search/search-models';

export interface AddProductModalModel {
  productData?: SearchResultWithNutrients;
  closeModal: () => void;
}
