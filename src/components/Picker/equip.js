import { connect } from 'react-redux';
import { selectSubreddit } from '../../actions';

export default connect(
    state => ({
        value: state.selectedSubreddit,
        options: ['halo', 'forge', 'reactjs', 'frontend'],
    }),
    dispatch => ({
        onChange: (nextSubreddit) => {
            dispatch(selectSubreddit(nextSubreddit));
        },
    })
);
