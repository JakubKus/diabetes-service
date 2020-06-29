export interface Product extends ProductBase {
  id: number;
}

export interface ProductBase {
  name: string;
  dateAdded: Date;
  nutritional: {
    protein: number;
    fats: number;
    carbohydrates: number;
    salt: number;
    calories: number;
    weight: number;
  };
}
