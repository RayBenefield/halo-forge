import { connect } from 'react-redux';
import { invalidateSubreddit, fetchPostsIfNeeded } from '../../actions';

export default connect(
    state => ({
        selectedSubreddit: state.selectedSubreddit,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedSubreddit }, { dispatch }) => ({
        refresh: () => {
            dispatch(invalidateSubreddit(selectedSubreddit));
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        },
    })
);
