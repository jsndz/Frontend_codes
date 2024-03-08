import { CLEAR_ITEM, CLEAR_LIST, RESET_LIST } from "./action";
import { data } from "../../data";
const reducer = (state, action) => {
  // console.log(action);
  // return "hlo";
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === CLEAR_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  throw new Error(`No matching ${action.type} - action type is found`);
};
export default reducer;
