const initState = { items: ["Đi làm", "ở nhà"] };

const SET_TODO = "SET_TODO";
const ADD_TODO = "ADD_TODO";

export const setTodo = (todos) => ({
  type: SET_TODO,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
