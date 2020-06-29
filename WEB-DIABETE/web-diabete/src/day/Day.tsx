import React, { FC } from 'react';
import { DayModalModel, DayModel } from 'shared/models/day';
import './day.scss';

export const Day: FC<DayModalModel> = day => {
  const modalData: DayModel = { products: day.products, dateAdded: day.dateAdded };
  return <div className="day">
    <p className="day-date">{day.dateAdded}</p>
    <ul className="day-products">
      {day.products?.slice(0, 4).map((x, i) =>
        <li key={x.id} className="day-product">
          {i === 3 ? '...' : <><span>{x.name}</span><span>{x.nutritional.weight}g</span></>}
        </li>
      )}
    </ul>
    <button onClick={() => day.setModal(modalData)} className="day-button">See more</button>
  </div>;
}
