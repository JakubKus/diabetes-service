import React, { FC, useState } from 'react';
import { addProduct } from './addProduct';
import { AddProductModalModel } from './add-product-modal-models';
import { toOneDecimal } from '../../../shared/utils/parsers';
import './add-product-modal.scss'

export const AddProductModal: FC<AddProductModalModel> = props => {
  const [amount, setAmount] = useState<number | string>(100);
  const [inputError, setInputError] = useState('');

  const handleAddProduct = async () => {
    if (typeof amount !== 'number') {
      setInputError('Value is empty');
      return;
    } else if (amount < 0) {
      setInputError('Value is too small');
      return;
    } else if (amount > 5000) {
      setInputError('Value is too big');
      return;
    }

    if (props.productData) {
      try {
        await addProduct(props.productData);
      } catch (e) {
        console.log(new Error(e).message)
      }
    }

    props.closeModal();
  };

  const {
    protein, grams, calories, carbs, sodium, fat, sugar
  } = props.productData ?? {};

  return props.productData ? (
    <div className="addModal-container" onClick={props.closeModal}>
      <div className="addModal" onClick={e => e.stopPropagation()}>
        <h2 className="addModal-title">{props.productData.name}</h2>
        <div className="addModal-details">
          <img
            className="addModal-image"
            src={props.productData?.image}
            alt={props.productData.name}
          />
          <div className="addModal-nutritionals">
            <div className="addModal-nutritionals__values">
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Protein</p>
                <p
                  className="addModal-nutritional__value
                  addModal-nutritional__value--green"
                >
                  {protein != null && grams != null
                    ? `${toOneDecimal(protein * +`${amount}` / +`${grams}`)}g`
                    : '-'}
                </p>
              </div>
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Carbs</p>
                <p
                  className="addModal-nutritional__value
                  addModal-nutritional__value--red"
                >
                  {carbs != null && grams != null
                    ? `${toOneDecimal(carbs * +`${amount}` / +`${grams}`)}g`
                    : '-'}
                </p>
              </div>
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Fat</p>
                <p
                  className="addModal-nutritional__value
                  addModal-nutritional__value--blue"
                >
                  {fat != null && grams != null
                    ? `${toOneDecimal(fat * +`${amount}` / +`${grams}`)}g`
                    : '-'}
                </p>
              </div>
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Sodium</p>
                <p className="addModal-nutritional__value">
                  {sodium != null && grams != null
                    ? `${toOneDecimal(sodium * +`${amount}` / +`${grams}`)}mg`
                    : '-'}
                </p>
              </div>
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Sugar</p>
                <p className="addModal-nutritional__value">
                  {sugar != null && grams != null
                    ? `${toOneDecimal(sugar * +`${amount}` / +`${grams}`)}g`
                    : '-'}
                </p>
              </div>
              <div className="addModal-nutritional">
                <p className="addModal-sub-title">Calories</p>
                <p className="addModal-nutritional__value">
                  {calories != null && grams != null ?
                    `${toOneDecimal(calories * +`${amount}` / +`${grams}`)}kcal`
                    : '-'}
                </p>
              </div>
            </div>
            <div className="addModal-amount-container">
              <div className="addModal-amount">
                <p className="addModal-sub-title">Amount (g)</p>
                <input
                  className="addModal-amount__input"
                  value={amount}
                  type="number"
                  onClick={_ => setInputError('')}
                  onChange={e => setAmount(e.target.valueAsNumber || '')}
                />
              </div>
              {!!inputError &&
                <span className="addModal-error">{inputError}</span>}
            </div>
          </div>
        </div>
        <button className="addModal-button" onClick={handleAddProduct}>
          Add
        </button>
      </div>
    </div>
  ) : null;
};
