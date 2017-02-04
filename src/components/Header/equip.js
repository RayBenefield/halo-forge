import { connect } from 'react-redux';
import { login } from 'src/actions';

export default connect(
    null,
    dispatch => ({
        login: () => {
            dispatch(login());
        },
    }),
);
