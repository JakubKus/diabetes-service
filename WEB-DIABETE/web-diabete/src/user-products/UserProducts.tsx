import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { groupBy } from 'lodash-es';
import dayjs from 'dayjs';
import { selectProducts, handleGetProducts } from 'features/products/products';
import { Day } from 'day/Day';
import { DayModal } from 'day-modal/DayModal';
import { DayModel } from 'shared/models/day';
import { DayProducts } from './user-products-models';
import './user-products.scss';

export const UserProducts: FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [modalData, setModalData] = useState<DayModel>();

  useEffect(() => {
    dispatch(handleGetProducts());
  }, [dispatch]);

  const groupedDays = groupBy(products, x => dayjs(x.dateAdded).format('YYYY.MM.DD'));
  const isToday = (date: string) => dayjs().isSame(dayjs(date), 'd');

  let thisWeek: DayProducts[] = [];
  let thisMonth: DayProducts[] = [];
  let older: DayProducts[] = [];
  for (const day in groupedDays) {
    if (groupedDays.hasOwnProperty(day)) {
      const dateAdded = dayjs(day).format('ddd, DD.MM.YYYY');
      const products = groupedDays[day];
      if (dayjs().isSame(dayjs(day), 'w')) {
        thisWeek.push({ dateAdded: isToday(day) ? 'Today' : dateAdded, products });
      } else if (dayjs().isSame(dayjs(day), 'M')) {
        thisMonth.push({ dateAdded, products });
      } else {
        older.push({ dateAdded, products });
      }
    }
  }

  return <div className="userProds">
    {thisWeek.length > 0 && <section className="userProds-section">
      <h2 className="userProds-section__title">This week</h2>
      {thisWeek.map(x =>
        <Day key={x.dateAdded} dateAdded={x.dateAdded} products={x.products} setModal={setModalData} />
      )}
    </section>}
    {thisMonth.length > 0 && <section className="userProds-section">
      <h2 className="userProds-section__title">This month</h2>
      {thisMonth.map(x =>
        <Day key={x.dateAdded} dateAdded={x.dateAdded} products={x.products} setModal={setModalData} />
      )}
    </section>}
    {older.length > 0 && <section className="userProds-section">
      <h2 className="userProds-section__title">Older</h2>
      {older.map(x =>
        <Day key={x.dateAdded} dateAdded={x.dateAdded} products={x.products} setModal={setModalData} />
      )}
    </section>}
    <DayModal dateAdded={modalData?.dateAdded} products={modalData?.products} setModal={setModalData} />
  </div>
}
