import firebase from "../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { edit, setDel } from "../redux/Action";

const Result = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state);

  const submitDel = (e, index) => {
    e.preventDefault();
    dispatch(setDel(index));
  };

  return (
    <div>
      {Array.isArray(result) &&
        result?.map((item, index) => (
          <p className='resultPara' key={index}>
            {item} &nbsp; &nbsp;
            <button
              className='button2 button3'
              onClick={() => dispatch(edit(index))}
            >
              edit
            </button>
            <button
              className='button2 button3'
              onClick={(e) => submitDel(e, index)}
            >
              delete
            </button>
          </p>
        ))}
    </div>
  );
};
export default Result;
