import { connect } from 'react-redux';
import keys from 'lodash/keys';

export default connect(
    ({ posts, isFetching }) => ({
        posts,
        postCount: keys(posts).length,
        isFetching,
        lastUpdated: new Date(),
    }),
);
