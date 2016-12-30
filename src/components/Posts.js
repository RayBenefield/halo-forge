import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

export default ({ posts }) => (
    <div>
        {posts.map((post, i) =>
            <Card key={i}>
                <CardTitle title={post.title} />
            </Card>
        )}
    </div>
);
