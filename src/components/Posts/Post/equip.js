import _ from 'underscore';
import { connect } from 'react-redux';

export default connect(
    (state, ownProps) => ({
        style: _.extend({}, ownProps.style, state.layout.item),
        id: ownProps.post.id,
    }),
    dispatch => ({ dispatch }),
    ({ id, style }, { dispatch }, ownProps) => _.extend({
        style,
    }, ownProps),
);
