// https://trackapi.nutritionix.com/v2/utils/nutrients
export const NUTRIENTS = {
  PROTEIN_ID: 203,
  FAT_ID: 204,
  CARBS_ID: 205,
  CALORIES_ID: 208,
  SODIUM_ID: 307,
}

export interface SearchResponse {
  branded: [{
    food_name: string;
    photo: {
      thumb: string;
    };
    full_nutrients: [{
      value: number;
      attr_id: number;
    }];
    serving_weight_grams: string;
    serving_unit: string;
    serving_qty: number;
    nf_calories: number;
  }];
}
