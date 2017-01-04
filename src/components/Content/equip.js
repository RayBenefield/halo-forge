import { connect } from 'react-redux';

export default connect(
    ({ posts, isFetching }) => ({
        posts,
        postCount: Object.keys(posts).length,
        isFetching,
        lastUpdated: new Date(),
    }),
);
