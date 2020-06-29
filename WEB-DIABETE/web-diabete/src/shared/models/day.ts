import { Product } from 'shared/models/product';
import { Dispatch, SetStateAction } from 'react';

export interface DayModalModel extends DayModel {
  setModal: Dispatch<SetStateAction<DayModel | undefined>>;
}

export interface DayModel {
  dateAdded?: string;
  products?: Product[];
}
