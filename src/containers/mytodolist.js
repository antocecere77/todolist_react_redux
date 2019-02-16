import {connect } from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo, toggleTodo} from '../actions/index'

  
  //consts filterMyTodos = (todos = [], filter='ALL') => {

  //}

  const mapStateToProps =  (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps, {removeTodo, toggleTodo});

const MyTodoList = myConnect(TodoList);

export default MyTodoList;