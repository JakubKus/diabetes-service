import { FullNutrient } from 'shared/models/full-nutrient';

// https://trackapi.nutritionix.com/v2/utils/nutrients
export const NUTRIENTS = {
  PROTEIN_ID: 203,
  FAT_ID: 204,
  CARBS_ID: 205,
  SODIUM_ID: 307,
  SUGAR_ID: 269,
}

export interface SearchResultsState {
  searchResults: SearchResponse
}

export interface SearchResponse {
  branded: BrandedFoodResponse[];
}

interface BrandedFoodResponse {
  food_name: string;
  photo: {
    thumb: string;
  };
  full_nutrients: FullNutrient[];
  serving_weight_grams: string;
  nf_calories: number;
  nix_item_id: string;
}
