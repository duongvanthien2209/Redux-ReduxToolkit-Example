import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../todoSlice";

const TodoApp = (props) => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText('');
  };

  // console.log(todos);
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={text}
        onChange={evt => setText(evt.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {todos.map((todo, key) => (
          <li key={key}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
