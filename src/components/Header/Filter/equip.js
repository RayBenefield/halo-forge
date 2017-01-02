import _ from 'underscore';
import { connect } from 'react-redux';
import { NEW, ADDED, DROPPED, filter } from '../../../actions';

export default connect(
    state => ({
        status: state.filter,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ status }, { dispatch }) => ({
        status,
        filter: () => dispatch(filter([NEW, ADDED, DROPPED][_.random(0, 2)])),
    }),
);
