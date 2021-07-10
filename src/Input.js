import { useDispatch, useSelector } from "react-redux"
import { pushData, setInputVal, update } from "./redux/Action"

const Input = () => {
    const { inputVal, checkEdit } = useSelector(state => state)
    const dispatch = useDispatch()
    return(
        <div>
            <input value={inputVal} onChange={(e)=> dispatch(setInputVal(e.target.value))} />
            {
            !checkEdit && checkEdit !== 0 ?
            <button onClick={() => dispatch(pushData(inputVal)) && dispatch(setInputVal(""))}>Submit</button> :
            <button onClick={() => dispatch(update(inputVal))}>update</button>
            }
        </div>
    )
}
export default Input