import { connect } from 'react-redux';
import forEach from 'lodash/forEach';
import { fetchPosts } from 'src/actions';

export default connect(
    state => ({
        selectedQu: state.selectedQu,
        sources: state.qus[state.selectedQu].sources,
    }),
    dispatch => ({
        dispatch,
    }),
    ({ selectedQu, sources }, { dispatch }) => ({
        refresh: () => {
            forEach(sources, (source) => {
                dispatch(fetchPosts(selectedQu, source));
            });
        },
    })
);
