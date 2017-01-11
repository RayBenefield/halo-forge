import { connect } from 'react-redux';
import { selectSource } from 'src/actions';

export default connect(
    state => ({
        value: state.selectedSource,
        options: ['halo', 'forge', 'reactjs', 'frontend'],
    }),
    dispatch => ({
        onChange: (nextSource) => {
            dispatch(selectSource(nextSource));
        },
    })
);
