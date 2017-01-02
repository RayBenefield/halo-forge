import _ from 'underscore';
import { connect } from 'react-redux';
import { NEW, ADDED, DROPPED, filter } from '../../../actions';

export default connect(
    state => ({
        selectedSource: state.selectedSource,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedSource }, { dispatch }) => ({
        filter: () => {
            dispatch(filter([NEW, ADDED, DROPPED][_.random(0, 2)]));
        },
    })
);
