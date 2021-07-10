import { PUSH_DATA, SET_CHECK_EDIT, SET_DEL, SET_EDIT, SET_INPUTVAL, SET_RESULT, SET_UPDATE } from "./ActionType"

export const initialState = ({
    inputVal: "",
    result: [],
    checkEdit: false,
})
export default function Reducer (state = initialState, action) {
    switch(action.type){
    case SET_CHECK_EDIT:
        return{
            ...state,
            checkEdit: action.payload
        }
    case SET_INPUTVAL:
        // console.log(state.inputVal, "input2")
        return{
            ...state,
            inputVal: action.payload
        }
    case SET_RESULT:
        return{
            ...state,
            result: action.payload
        }
    case SET_EDIT:
        return{
            ...state,
            inputVal: state.result[action.payload],
            checkEdit: action.payload
        }
    case SET_UPDATE:
        let tempArr3 = [...state.result]
        tempArr3[state.checkEdit] = action.payload
        return{
            ...state,
            result: tempArr3,
            inputVal: "",
            checkEdit: false
        }
    case PUSH_DATA:
        // console.log(state.inputVal, "input99")
        let tempArr = [...state.result]
        tempArr.push(action.payload)
        return{
            ...state,
            result: tempArr
        }
    case SET_DEL:
        let tempArr2 = [...state.result]
        tempArr2 = tempArr2.filter((item, index) => index !== action.payload)
        return{
            ...state,
            result: tempArr2
        }
    default:
        return{
            ...state
        }
    }
}