import { useDispatch, useSelector } from "react-redux"
import { edit, setDel } from "./redux/Action"

const Result = () => {
    const dispatch = useDispatch()
    const { result } = useSelector(state => state)
    return(
        <div>
            { result?.map((item, index) => 
                <p key={index}>{item} &nbsp; &nbsp;
                <button onClick={() => dispatch(edit(index))}>edit</button>
                <button onClick={() => dispatch(setDel(index))}>delete</button>
                </p>
            )}
        </div>
    )
}
export default Result