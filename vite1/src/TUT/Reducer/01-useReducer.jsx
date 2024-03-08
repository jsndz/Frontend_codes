import React, { useReducer } from "react";
import { data } from "../../data";
import reducer from "./reducer";
import { CLEAR_ITEM, CLEAR_LIST, RESET_LIST } from "./action";
const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: CLEAR_ITEM, payload: { id } });
  };
  const clearList = (id) => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = (id) => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
