import {connect } from 'react-redux';

import addTodoComponent from '../components/addTodo';
import { addTodo } from '../actions/index';

/*
const mapDispatchToProps = (dispatch) => {
    return {
        addNew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(addTodoComponent)
*/


export default connect(null, {addTodo} )(addTodoComponent);