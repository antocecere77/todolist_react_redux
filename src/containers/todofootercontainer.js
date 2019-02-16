import TodoFooter from  '../components/todoFooter';
import {connect} from 'react-redux';
import {filterTodo} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {
        activeFilter: state.activeFilter
    }
}

export default connect(mapStateToProps, {filterTodo})(TodoFooter);