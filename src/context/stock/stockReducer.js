// @ts-check
import {
  CREATE_STOCK,
  GET_STOCKS,
  UPDATE_STOCK,
  DELETE_STOCK,
  SETCURRENT_STOCK,
  CLEARCURRENT_STOCK,
  ERROR_STOCK,
  CLEAR_STOCKS,
  CLEAR_ERRORS,
  FILTER_STOCKS,
  CLEAR_FILTER,
} from "../types";

export default function bAudiReducer(state, action) {
  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
        loading: false,
      };
    case CREATE_STOCK:
      return {
        ...state,
        stocks: [...state.stocks, action.payload],
        loading: false,
      };
    case UPDATE_STOCK:
      return {
        ...state,
        stocks: state.stocks.map((stock) =>
          stock._id === action.payload._id ? action.payload : stock
        ),
        loading: false,
      };
    case DELETE_STOCK:
      return {
        ...state,
        stocks: state.stocks.filter((stock) => stock._id !== action.payload),
        loading: false,
      };
    case CLEAR_STOCKS:
      return {
        ...state,
        stocks: null,
        error: null,
        current: null,
      };
    case SETCURRENT_STOCK:
      return {
        ...state,
        current: action.payload,
      };
    case CLEARCURRENT_STOCK:
      return {
        ...state,
        current: null,
      };
    case ERROR_STOCK:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case FILTER_STOCKS:
      return {
        ...state,
        filtered: state.stocks.filter((stock) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            stock.name.match(regex) ||
            stock.ticker.match(regex) ||
            stock.buyingDate.match(regex) ||
            stock.sellingDate.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
}
