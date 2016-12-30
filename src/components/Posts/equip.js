import { connect } from 'react-redux';

export default connect(
    ({ postsBySubreddit, selectedSubreddit }) => ({
        posts: postsBySubreddit[selectedSubreddit].items,
    }),
);
