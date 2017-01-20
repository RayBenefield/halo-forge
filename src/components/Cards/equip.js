import assign from 'lodash/assign';
import { connect } from 'react-redux';
import { addPost, dropPost } from 'src/actions';

export default connect(
    (state, ownProps) => ({
        style: assign({}, ownProps.style, { width: 320, height: 120 }),
        id: ownProps.post.id,
        source: ownProps.post.source,
    }),
    dispatch => ({ dispatch }),
    ({ source, id, style }, { dispatch }, ownProps) => assign({
        style,
        add: () => dispatch(addPost(source, id)),
        drop: () => dispatch(dropPost(source, id)),
    }, ownProps),
);
