import { connect } from 'react-redux';
import { login } from 'src/actions';

export default connect(
    state => ({
        user: state.profile.name,
    }),
    dispatch => ({
        login: () => {
            dispatch(login());
        },
    }),
);
