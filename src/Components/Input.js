import firebase from "../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  pushData,
  setCheckEdit,
  setInputVal,
  setResult,
  update,
} from "../redux/Action";

const Input = () => {
  const { inputVal, checkEdit } = useSelector((state) => state);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(pushData(inputVal));
    dispatch(setInputVal(""));
  };

  const updating = (e) => {
    e.preventDefault();
    dispatch(update(inputVal));
  };

  const clearAll = () => {
    dispatch(setResult([]));
  };
  const copy = () => {
    let input = document.getElementById("input");
    input.select();
    document.execCommand("copy");
    alert(`${input.value} is copied`);
  };
  const empty = () => {
    dispatch(setInputVal(""));
  };
  return (
    <div className='row1 divRow'>
      <form
        className='row1 formRow'
        onSubmit={!checkEdit && checkEdit !== 0 ? submit : updating}
      >
        <input
          className='TodoInput'
          value={inputVal}
          id={"input"}
          onChange={(e) => dispatch(setInputVal(e.target.value))}
        />
        {!checkEdit && checkEdit !== 0 ? (
          <button className='button2'>Submit</button>
        ) : (
          <button className='button2'>update</button>
        )}
      </form>
      <div className="row1">
      <button className='button2' onClick={() => copy()}>
        Copy
      </button>
      <button className='button2' onClick={() => empty()}>
        empty Input
      </button>
      <button className='button2' onClick={() => clearAll()}>
        Clear all
      </button>
      </div>
    </div>
  );
};
export default Input;
