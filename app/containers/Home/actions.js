/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_DETAIL,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_ERROR,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  TOTAL_PRICE
} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function fetchDetail() {
  return {
    type: FETCH_DETAIL,
  };
}

export function fetchDetailSuccess(products) {
  return {
    type: FETCH_DETAIL_SUCCESS,
    products,
  };
}

export function fetchDetailError(error) {
  return {
    type: FETCH_DETAIL_ERROR,
    error,
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export function subtractQuantity(id) {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export function addQuantity(value, id) {
  return {
    type: ADD_QUANTITY,
    value,
    id,
  };
};

export function totalPrice() {
  return {
    type: TOTAL_PRICE,
  };
};