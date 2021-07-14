import {
  PUSH_DATA,
  SET_CHECk,
  SET_CHECK_EDIT,
  SET_DEL,
  SET_EDIT,
  SET_INPUTVAL,
  SET_RESULT,
  SET_UPDATE,
  SET_USER,
} from "./ActionType";

export const initialState = {
  check: false,
  inputVal: "",
  result: [],
  checkEdit: false,
  user: false,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHECK_EDIT:
      return {
        ...state,
        checkEdit: action.payload,
      };
    case SET_INPUTVAL:
      return {
        ...state,
        inputVal: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CHECk:
      return {
        ...state,
        check: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action?.payload,
      };
    case SET_EDIT:
      return {
        ...state,
        inputVal: state.result[action.payload],
        checkEdit: action.payload,
      };
    case SET_UPDATE:
      let tempArr3 = [...state.result];
      tempArr3[state.checkEdit] = action.payload;
      return {
        ...state,
        result: tempArr3,
        inputVal: "",
        checkEdit: false,
      };
    case PUSH_DATA:
      let tempArr = Array.isArray(state.result) ? [...state.result] : [];
      tempArr.push(action.payload);
      return {
        ...state,
        result: tempArr,
      };
    case SET_DEL:
      let tempArr2 = [...state.result];
      tempArr2 = tempArr2.filter((item, index) => index !== action.payload);
      return {
        ...state,
        result: tempArr2,
      };
    default:
      return {
        ...state,
      };
  }
}
