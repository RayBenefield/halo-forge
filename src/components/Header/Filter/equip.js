import { connect } from 'react-redux';
import { filter } from '../../../actions';

export default connect(
    state => ({
        status: state.filter,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ status }, { dispatch }) => ({
        status,
        filter: (e, value) => dispatch(filter(value)),
    }),
);
