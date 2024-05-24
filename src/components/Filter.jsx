import { useDispatch } from "react-redux";
import { ActionCreators } from "../actionCreators";

const Filter = () => {
  const dispatch = useDispatch();
  const { setFilter } = ActionCreators(dispatch);
  const handleChange = (event) => {
    const searchContent = event.target.value;
    setFilter(searchContent);
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
