import _ from 'underscore';
import { connect } from 'react-redux';

export default connect(
    ({ postsBySource, selectedSource, layout: { item } }, ownProps) => ({
        posts: postsBySource[selectedSource].items,
        style: _.create(ownProps.style, item),
    }),
);
