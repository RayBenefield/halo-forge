import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions';

export default connect(
    state => ({
        selectedSource: state.selectedSource,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedSource }, { dispatch }) => ({
        refresh: () => {
            dispatch(fetchPosts(selectedSource));
        },
    })
);
