import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';

const time = require('time-ago')();

const Posts = ({ style, posts, muiTheme }) => {
    const postCards = posts.map((post, i) => {
        const link = (
            <sub style={{ width: '100%', position: 'fixed', bottom: '0px', right: '0px', color: muiTheme.card.subtitleColor, textAlign: 'right', padding: '16px' }}>
                <a href={post.sourceUrl}>{time.ago(post.added)} • {post.source} <img src={post.sourceImage} alt={post.title} style={{ paddingLeft: '8px', verticalAlign: 'middle' }} /></a>
            </sub>
        );
        return (
            <Card key={i} style={style}>
                <a href={post.url}>
                    <img src={post.image} alt={post.title} height={81} width={101} style={{ padding: '16px', paddingRight: '0px', float: 'left' }} />
                    <CardHeader
                        title={post.title}
                        titleStyle={{ padding: '16px', paddingTop: '8px' }}
                        actAsExpander
                    />
                    {link}
                </a>
            </Card>
        );
    });

    return (
        <PostsGrid
            itemWidth={style.width}
            itemHeight={style.height}
            maxWidth={1600}
            items={postCards}
        />
    );
};

export default muiThemeable()(equip(Posts));
