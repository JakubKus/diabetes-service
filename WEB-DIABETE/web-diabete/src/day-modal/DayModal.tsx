import React, { FC } from 'react';
import { ReactComponent as CloseIcon } from 'shared/icons/close.svg';
import { DayModalModel } from 'shared/models/day';
import { toOneDecimal } from 'shared/utils/parsers';
import './day-modal.scss';

export const DayModal: FC<DayModalModel> = day => {
  const closeModal = () => day.setModal(undefined);
  const productsNumber = day.products?.length || 0;

  return productsNumber > 0 ? <div className="dayModal-container" onClick={closeModal}>
    <div className="dayModal" onClick={e => e.stopPropagation()}>
      <p className="dayModal-title">{day.dateAdded}</p>
      <CloseIcon className="dayModal-close" onClick={closeModal} />
      <table className="dayModal-table">
        <thead className="dayModal-thead">
        <tr className="dayModal-tr dayModal-thead__tr">
          <td className="dayModal-td dayModal-thead__td dayModal-td__name">Product</td>
          <td className="dayModal-td dayModal-thead__td">Protein</td>
          <td className="dayModal-td dayModal-thead__td">Carbs</td>
          <td className="dayModal-td dayModal-thead__td">Fat</td>
          <td className="dayModal-td dayModal-thead__td">Sodium</td>
          <td className="dayModal-td dayModal-thead__td">Amount</td>
          <td className="dayModal-td dayModal-thead__td">Calories</td>
        </tr>
        </thead>
        <tbody className="dayModal-tbody">
        {day.products?.map(x =>
          <tr key={x.id} className="dayModal-tr dayModal-tbody__tr">
            <td className="dayModal-td dayModal-tbody__td dayModal-td__name">{x.name}</td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__protein">
              {x.nutritional.protein != null ? `${toOneDecimal(x.nutritional.protein)}g` : '-'}
            </td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__carbs">
              {x.nutritional.carbohydrates != null ? `${toOneDecimal(x.nutritional.carbohydrates)}g` : '-'}
            </td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__fat">
              {x.nutritional.fats != null ? `${toOneDecimal(x.nutritional.fats)}g` : '-'}
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {x.nutritional.salt != null ? `${toOneDecimal(x.nutritional.salt)}mg` : '-'}
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {x.nutritional.weight != null ? `${toOneDecimal(x.nutritional.weight)}g` : '-'}
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {x.nutritional.calories != null ? `${toOneDecimal(x.nutritional.calories)}kcal` : '-'}
            </td>
          </tr>,
        )}
        </tbody>
        <tfoot>
          <tr><td colSpan={100}><hr className="dayModal-line" /></td></tr>
          <tr className="dayModal-tr">
            <td className="dayModal-td dayModal-tbody__td dayModal-td__name">Total</td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__protein">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.protein, 0) || 0)}g
            </td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__carbs">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.carbohydrates, 0) || 0)}g
            </td>
            <td className="dayModal-td dayModal-tbody__td dayModal-td__fat">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.fats, 0) || 0)}g
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.salt, 0) || 0)}mg
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.weight, 0) || 0)}g
            </td>
            <td className="dayModal-td dayModal-tbody__td">
              {toOneDecimal(day.products?.reduce((x, y) => x + y.nutritional.calories, 0) || 0)}kcal
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div> : null;
}
