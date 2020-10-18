const initState = { items: ['Đi làm, ở nhà'] };

const SET_TODO = 'SET_TODO';

export const setTodo = (todos) => ({
  type: SET_TODO,
  payload: todos,
});

const reducer = (state = initState, action) => {
  switch(action.type) {
    case SET_TODO:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;