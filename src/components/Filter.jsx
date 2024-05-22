import { useDispatch } from "react-redux";
import { ActionCreators } from "../actionCreators";
const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = ActionCreators(dispatch);
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const searchContent = event.target.value;
    filter(searchContent);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
