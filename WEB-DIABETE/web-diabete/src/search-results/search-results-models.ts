import { FullNutrient } from 'shared/models/full-nutrient';

export interface NutrientsWithNutrientId {
  fullNutrients: FullNutrient[];
  nutrientId: number;
}
