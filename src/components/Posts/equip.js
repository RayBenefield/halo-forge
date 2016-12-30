import _ from 'underscore';
import { connect } from 'react-redux';

export default connect(
    ({ postsBySubreddit, selectedSubreddit, layout: { item } }, ownProps) => ({
        posts: postsBySubreddit[selectedSubreddit].items,
        style: _.create(ownProps.style, item),
    }),
);
