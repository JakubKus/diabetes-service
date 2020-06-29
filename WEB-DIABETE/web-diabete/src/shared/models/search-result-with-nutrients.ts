export interface SearchResultWithNutrients {
  id: string;
  name: string;
  protein?: number;
  carbs?: number;
  fat?: number;
  sodium?: number;
  sugar?: number;
  calories?: number;
  image?: string;
  grams?: number;
}
