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
  ADD_QUANTITY,
  TOTAL_PRICE
} from "./constants";

// flow type
type ActionWithPayloadType<T, P> = {|
  type: T,
  payload: P,
|};

type ActionWithPayloadIdType<T, V, I> = {|
  type: T,
  value: V,
  id: I
|};

type ActionWithoutPayloadType<T> = {|
  type: T,
|};
export type SuccessPayloadType = {|
  products: any,
|};

export type ErrorPayloadType = {|
  error: string,
|};

// action type
type GetProductsSuccessActionType = ActionWithPayloadType<
  typeof FETCH_DETAIL_SUCCESS,
  SuccessPayloadType
>;

type GetProductsErrorActionType = ActionWithPayloadType<
  typeof FETCH_DETAIL_ERROR,
  ErrorPayloadType
>;

type AddToCartActionType = ActionWithPayloadType<
  typeof ADD_TO_CART,
  any
>;

type RemoveItemActionType = ActionWithPayloadType<
  typeof REMOVE_ITEM,
  any
>;

type TotalPriceActionType = ActionWithoutPayloadType<
  typeof TOTAL_PRICE
>;

type AddQuantityActionType = ActionWithPayloadIdType<
typeof ADD_QUANTITY,
number,
string
>;

// actions
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

export function fetchDetailSuccess(
    products: SuccessPayloadType
  ): GetProductsSuccessActionType {
    return {
      type: FETCH_DETAIL_SUCCESS,
      products,
    };
  }

export function fetchDetailError(error: ErrorPayloadType): GetProductsErrorActionType{
  return {
    type: FETCH_DETAIL_ERROR,
    error,
  };
}

export function addToCart(
         id: any
       ): AddToCartActionType {
         return {
           type: ADD_TO_CART,
           id,
         };
       };
//remove item action
export function removeItem(id: any): RemoveItemActionType {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

//add qt action
export function addQuantity(value: number, id: string) {
  return {
    type: ADD_QUANTITY,
    value,
    id,
  };
};

export function totalPrice(): TotalPriceActionType {
  return {
    type: TOTAL_PRICE,
  };
};