import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../../features/search/search';
import { NUTRIENTS } from '../../features/search/search-models';
import './search-results.scss';
import { NutrientsWithNutrient } from './search-results-models';
import { toOneDecimal } from '../../shared/utils/parsers';

export const SearchResults: FC = () => {
  const searchResults = useSelector(selectSearchResults);

  const getNutrient = ({ nutrient, fullNutrients }: NutrientsWithNutrient) =>
    fullNutrients.find(x => x.attr_id === nutrient)?.value;

  const searchResultsWithNutrients = searchResults.branded.map(
    x => ({
      id: x.nix_item_id,
      name: x.food_name,
      protein: getNutrient({
        nutrient: NUTRIENTS.PROTEIN_ID,
        fullNutrients: x.full_nutrients,
      }),
      carbs: getNutrient({
        nutrient: NUTRIENTS.CARBS_ID,
        fullNutrients: x.full_nutrients,
      }),
      fat: getNutrient({
        nutrient: NUTRIENTS.FAT_ID,
        fullNutrients: x.full_nutrients,
      }),
      sodium: getNutrient({
        nutrient: NUTRIENTS.SODIUM_ID,
        fullNutrients: x.full_nutrients,
      }),
      sugar: getNutrient({
        nutrient: NUTRIENTS.SODIUM_ID,
        fullNutrients: x.full_nutrients,
      }),
      calories: x.nf_calories,
    }),
  );

  return <div className="searchRes">
    {searchResultsWithNutrients.length > 0 ?
      <table className="searchRes-table">
        <thead className="searchRes-thead">
        <tr className="searchRes-tr searchRes-thead__tr">
          <td className="searchRes-td searchRes-thead__td searchRes-td__name">
            Product (per serving)
          </td>
          <td className="searchRes-td searchRes-thead__td">Protein</td>
          <td className="searchRes-td searchRes-thead__td">Carbs</td>
          <td className="searchRes-td searchRes-thead__td">Fat</td>
          <td className="searchRes-td searchRes-thead__td">Sodium</td>
          <td className="searchRes-td searchRes-thead__td">Sugar</td>
          <td className="searchRes-td searchRes-thead__td">Calories</td>
        </tr>
        </thead>
        <tbody className="searchRes-tbody">
        {searchResultsWithNutrients.slice(0, 10).map(x =>
          <tr
            key={x.id}
            className="searchRes-tr searchRes-tbody__tr"
          >
            <td className="searchRes-td searchRes-tbody__td searchRes-td__name">
              {x.name}
            </td>
            <td
              className="searchRes-td searchRes-tbody__td searchRes-td__protein"
            >
              {x.protein != null ? `${toOneDecimal(x.protein)}g` : '-'}
            </td>
            <td
              className="searchRes-td searchRes-tbody__td searchRes-td__carbs"
            >
              {x.carbs != null ? `${toOneDecimal(x.carbs)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td searchRes-td__fat">
              {x.fat != null ? `${toOneDecimal(x.fat)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.sugar != null ? `${toOneDecimal(x.sugar)}g` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.sodium != null ? `${toOneDecimal(x.sodium)}mg` : '-'}
            </td>
            <td className="searchRes-td searchRes-tbody__td">
              {x.calories != null ? `${toOneDecimal(x.calories)} cal` : '-'}
            </td>
          </tr>,
        )}
        </tbody>
      </table> : <p className="searchRes-no-res">No results.</p>
    }
  </div>;
};
