import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { setTodo } from '../redux/todo';

const mapStateToProps = state => ({
  todos: state.todos.items,
});

const mapActionToProps = {
  setTodo,
};

export default connect(mapStateToProps, mapActionToProps)(TodoApp);