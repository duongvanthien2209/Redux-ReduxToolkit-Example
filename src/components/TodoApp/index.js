import React from 'react';

const TodoApp = props => {
  const { todos, setTodo } = props;

  console.log(todos);
  return (
    <div>
      Done
    </div>
  );
};

export default TodoApp;