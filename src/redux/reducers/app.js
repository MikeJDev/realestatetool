import { ADD_TODO } from "../actionTypes";

const initialState = { hello: 0 }

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;