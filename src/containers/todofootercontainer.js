import TodoFooter from  '../components/todoFooter';
import {connect} from 'react-redux';
import {filterTodo} from '../actions/index';

export default connect(null, {filterTodo})(TodoFooter);