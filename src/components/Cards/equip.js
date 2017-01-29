import assign from 'lodash/assign';
import { connect } from 'react-redux';
import { addPost, dropPost } from 'src/actions';

export default connect(
    (state, ownProps) => ({
        style: assign({}, ownProps.style, { width: 320, height: 120 }),
        post: ownProps.post,
        qu: state.selectedQu,
    }),
    dispatch => ({ dispatch }),
    ({ qu, post, style }, { dispatch }, ownProps) => assign({
        style,
        add: () => dispatch(addPost(qu, post)),
        drop: () => dispatch(dropPost(qu, post)),
    }, ownProps),
);
