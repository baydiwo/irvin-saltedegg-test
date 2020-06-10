// @flow
/*
 *
 * Home reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR, ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, TOTAL_PRICE } from "./constants";

export type StateType = {
  products: any,
  addedItems: any,
  total: number,
  tempTotal: number,
};

export const initialState = {
  products: [],
  addedItems: [],
  total: 0,
  tempTotal: 0,
};

const nameToId = (val) => {
  return val.toLowerCase().replace(/\s/g, "");
}

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state: StateType = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case FETCH_DETAIL_SUCCESS:
        return {
          ...state,
          products: action.products,
        };

      case ADD_TO_CART:
        let addedItem = state.products.find(
          (item) => nameToId(item.name) === nameToId(action.id)
        );
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(
          (item) => nameToId(action.id) === nameToId(item.name)
        );

        if (existed_item) {
          addedItem.quantity += 1;
          return {
            ...state,
            total: Number(state.total) + Number(addedItem.price),
          };
        } else {
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = Number(state.total) + Number(addedItem.price);

          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal,
          };
        }

      case REMOVE_ITEM:
        let itemToRemove = state.addedItems.find(
          (item) => nameToId(action.id) === nameToId(item.name)
        );
        let new_items = state.addedItems.filter(
          (item) => nameToId(action.id) !== nameToId(item.name)
        );

        //calculating the total
        let newTotal =
          state.total - Number(itemToRemove.price) * itemToRemove.quantity;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };

      case ADD_QUANTITY:
        if (action.value !== 0) {
          const addedItemQty = state.addedItems.find(
            (item) => nameToId(item.name) === nameToId(action.id)
          );

          addedItemQty.quantity = action.value;
          const newTotalItem =
            Number(addedItemQty.quantity) * Number(addedItemQty.price);

          return {
            ...state,
            total: newTotalItem,
            tempTotal: newTotalItem,
          };
        }

      case TOTAL_PRICE:
        let newProductData = [];
        for (const [key, value] of Object.entries(state.addedItems)) {
          const productResult = {
            name: value.name,
            price: value.price,
            image: value.image,
            currency: value.currency,
            quantity: value.quantity,
            totalItemPrice: Number(value.price) * value.quantity,
          };

          newProductData.push(productResult);
        }

        let tempTotal = 0;
        function amount(item) {
          tempTotal += item.totalItemPrice;
          return item.totalItemPrice;
        }

        newProductData.filter(amount);
        return {
          ...state,
          total: tempTotal,
        };
    }
  });

export default homeReducer;
