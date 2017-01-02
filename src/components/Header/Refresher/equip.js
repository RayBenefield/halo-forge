import { connect } from 'react-redux';
import { invalidateSource, fetchPostsIfNeeded } from '../../../actions';

export default connect(
    state => ({
        selectedSource: state.selectedSource,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedSource }, { dispatch }) => ({
        refresh: () => {
            dispatch(invalidateSource(selectedSource));
            dispatch(fetchPostsIfNeeded(selectedSource));
        },
    })
);
