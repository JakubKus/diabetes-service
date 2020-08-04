import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from 'features/search/search';
import { NUTRIENTS } from 'features/search/search-models';
import { NutrientsWithNutrientId } from './search-results-models';
import { SearchResultWithNutrients } from 'shared/models/search-result-with-nutrients'
import { toOneDecimal } from 'shared/utils/parsers';
import { AddProductModal } from 'add-product-modal/AddProductModal';
import './search-results.scss';

const getNutrient = ({ nutrientId, fullNutrients }: NutrientsWithNutrientId) =>
  fullNutrients.find(x => x.attr_id === nutrientId)?.value;
const PER_X_GRAMS = 100;

export const SearchResults: FC = () => {
  const searchResults = useSelector(selectSearchResults);
  const [selectedFood, selectFood] = useState<SearchResultWithNutrients>();
  const clearSelectedFood = () => selectFood(undefined);

  const searchResultsWithNutrients = searchResults.branded.slice(0, 10).map(
    x => ({
      id: x.nix_item_id,
      name: x.food_name,
      protein: getNutrient({ nutrientId: NUTRIENTS.PROTEIN_ID, fullNutrients: x.full_nutrients }),
      carbs: getNutrient({ nutrientId: NUTRIENTS.CARBS_ID, fullNutrients: x.full_nutrients }),
      fat: getNutrient({ nutrientId: NUTRIENTS.FAT_ID, fullNutrients: x.full_nutrients }),
      sodium: getNutrient({ nutrientId: NUTRIENTS.SODIUM_ID, fullNutrients: x.full_nutrients }),
      sugar: getNutrient({ nutrientId: NUTRIENTS.SUGAR_ID, fullNutrients: x.full_nutrients }),
      calories: x.nf_calories,
      image: x.photo.thumb,
      grams: +x.serving_weight_grams,
    }) as SearchResultWithNutrients
  );

  return <div className="searchRes">
    {searchResultsWithNutrients.length > 0 ?
      <table className="searchRes-table">
        <thead className="searchRes-thead">
        <tr className="searchRes-tr searchRes-thead__tr">
          <td className="searchRes-td searchRes-thead__td searchRes-td__name">Product (per 100g)</td>
          <td className="searchRes-td searchRes-thead__td">Protein</td>
          <td className="searchRes-td searchRes-thead__td">Carbs</td>
          <td className="searchRes-td searchRes-thead__td">Fat</td>
          <td className="searchRes-td searchRes-thead__td">Sodium</td>
          <td className="searchRes-td searchRes-thead__td">Sugar</td>
          <td className="searchRes-td searchRes-thead__td">Calories</td>
        </tr>
        </thead>
        <tbody className="searchRes-tbody">
        {searchResultsWithNutrients.map(x =>
          <tr key={x.id} className="searchRes-tr searchRes-tbody__tr" onClick={() => selectFood(x)}>
            <td className="searchRes-td searchRes-tbody__td searchRes-td__name">{x.name}</td>
            <td className="searchRes-td searchRes-tbody__td searchRes-td__protein">
              {x.protein != null && x.grams != null ?
                `${toOneDecimal(x.protein * PER_X_GRAMS / +`${x.grams}`)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td searchRes-td__carbs">
              {x.carbs != null && x.grams != null ?
                `${toOneDecimal(x.carbs * PER_X_GRAMS / +`${x.grams}`)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td searchRes-td__fat">
              {x.fat != null && x.grams != null ?
                `${toOneDecimal(x.fat * PER_X_GRAMS / +`${x.grams}`)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.sugar != null && x.grams != null ?
                `${toOneDecimal(x.sugar * PER_X_GRAMS / +`${x.grams}`)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.sodium != null && x.grams != null ?
                `${toOneDecimal(x.sodium * PER_X_GRAMS / +`${x.grams}`)}mg` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.calories != null && x.grams != null ?
                `${toOneDecimal(x.calories * PER_X_GRAMS / +`${x.grams}`)}kcal` : '-'}
            </td>
          </tr>,
        )}
        </tbody>
      </table> : <p className="searchRes-no-res">No results.</p>
    }
    <AddProductModal productData={selectedFood} closeModal={clearSelectedFood} />
  </div>;
};
