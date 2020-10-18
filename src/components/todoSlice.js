const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    setTodo: (state, action) => {
      // khi mutate thì ko return
      state.items = action.payload;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

const { actions, reducer } = todoSlice;
export const { setTodo, addTodo } = actions;
export default reducer;