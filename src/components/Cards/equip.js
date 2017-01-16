import assign from 'lodash/assign';
import { connect } from 'react-redux';

export default connect(
    (state, ownProps) => ({
        style: assign({}, ownProps.style, { width: 320, height: 120 }),
        id: ownProps.post.id,
    }),
    dispatch => ({ dispatch }),
    ({ id, style }, { dispatch }, ownProps) => assign({
        style,
        add: () => dispatch({ type: 'CHANGE_STATUS', id, status: 'ADDED' }),
        drop: () => dispatch({ type: 'CHANGE_STATUS', id, status: 'DROPPED' }),
    }, ownProps),
);
