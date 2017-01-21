import assign from 'lodash/assign';
import { connect } from 'react-redux';
import { addPost, dropPost } from 'src/actions';

export default connect(
    (state, ownProps) => ({
        style: assign({}, ownProps.style, { width: 320, height: 120 }),
        post: ownProps.post,
        source: ownProps.post.source,
    }),
    dispatch => ({ dispatch }),
    ({ source, post, style }, { dispatch }, ownProps) => assign({
        style,
        add: () => dispatch(addPost(source, post)),
        drop: () => dispatch(dropPost(source, post)),
    }, ownProps),
);
