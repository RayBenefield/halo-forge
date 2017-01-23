import { connect } from 'react-redux';
import forEach from 'lodash/forEach';
import { fetchPosts } from 'src/actions';

export default connect(
    state => ({
        selectedSource: state.selectedSource,
        sources: state.sources[state.selectedSource].sources,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedSource, sources }, { dispatch }) => ({
        refresh: () => {
            forEach(sources, (source) => {
                dispatch(fetchPosts(selectedSource, source));
            });
        },
    })
);
