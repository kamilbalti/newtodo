import { PUSH_DATA, SET_CHECK_EDIT, SET_DEL, SET_EDIT, SET_INPUTVAL, SET_RESULT, SET_UPDATE } from "./ActionType"

export const setInputVal = (payload) => ({
    type: SET_INPUTVAL,
    payload: payload,
})
export const setCheckEdit = (payload) => ({
    type: SET_CHECK_EDIT,
    payload,
})
export const setResult = (payload) => ({
    type: SET_RESULT,
    payload,
})
export const setDel = (payload) => ({
    type: SET_DEL,
    payload,
})
export const pushData = (payload) => ({
    type: PUSH_DATA,
    payload,
})
export const edit = (payload) => ({
    type: SET_EDIT,
    payload,
})
export const update = (payload) => ({
    type: SET_UPDATE,
    payload,
})