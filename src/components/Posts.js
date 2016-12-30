import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default ({ posts }) => (
    <div>
        {posts.map((post, i) => {
            const link = (<a href={post.url}>{post.title}</a>);
            const image = post.preview ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&') : 'http://lorempixel.com/108/81/';
            return (
                <Card key={i}>
                    <CardHeader
                        title={link}
                        subtitle={post.author}
                        actAsExpander
                        showExpandableButton
                    >
                        <img src={image} alt={post.title} height={81} width={101} />
                    </CardHeader>
                    <CardText expandable>
                        {post.selftext}
                    </CardText>
                </Card>
            );
        })}
    </div>
);
