import { Product } from 'shared/models/product';

export interface DayProducts {
  dateAdded: string;
  products: Product[];
}
