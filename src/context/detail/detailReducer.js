// @ts-check
import {
  CREATE_DETAIL,
  GET_DETAILS,
  GET_ONE_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
  DELETE_MEDICAL_DETAIL,
  SETCURRENT_DETAIL,
  CLEARCURRENT_DETAIL,
  ERROR_DETAIL,
  CLEAR_DETAILS,
  CLEAR_ERRORS,
  FILTER_DETAILS,
  CLEAR_FILTER,
} from "../types";

export default function detailReducer(state, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    case GET_ONE_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case CREATE_DETAIL:
      return {
        ...state,
        details: [...state.details, action.payload],
        loading: false,
      };
    case UPDATE_DETAIL:
      return {
        ...state,
        details: state.details.map((onedetail) =>
          onedetail._id === action.payload._id ? action.payload : onedetail
        ),
        loading: false,
      };
    case DELETE_DETAIL:
      return {
        ...state,
        details: state.details.filter(
          (detail) => detail._id !== action.payload
        ),
        loading: false,
      };
    case DELETE_MEDICAL_DETAIL:
      return {
        ...state,
        detail: state.detail.medicals.filter(
          (eachmedical) => eachmedical._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        details: null,
        error: null,
        current: null,
      };
    case SETCURRENT_DETAIL:
      return {
        ...state,
        current: action.payload,
      };
    case CLEARCURRENT_DETAIL:
      return {
        ...state,
        current: null,
      };
    case ERROR_DETAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case FILTER_DETAILS:
      return {
        ...state,
        filtered: state.details.filter((detail) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            detail.name.match(regex) ||
            detail.caseNumber.match(regex) ||
            detail.mobileNumber.match(regex) ||
            detail.date1.match(regex) ||
            detail.diagnosis1.match(regex) ||
            detail.prescription1.match(regex) ||
            detail.date2.match(regex) ||
            detail.diagnosis2.match(regex) ||
            detail.prescription2.match(regex) ||
            detail.date3.match(regex) ||
            detail.diagnosis3.match(regex) ||
            detail.prescription3.match(regex) ||
            detail.comments.match(regex) ||
            detail.gender.match(regex)
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
