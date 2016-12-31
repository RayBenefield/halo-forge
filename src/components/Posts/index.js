import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';
import rHalo from './r-halo.png';

const Posts = ({ style, posts, muiTheme }) => {
    const postCards = posts.map((post, i) => {
        const link = (
            <sub style={{ width: '100%', position: 'fixed', bottom: '0px', right: '0px', color: muiTheme.card.subtitleColor, textAlign: 'right', padding: '16px' }}>
                <a href={post.url}>
                    22 hours ago • /r/halo <img src={rHalo} alt={post.title} style={{ paddingLeft: '8px', verticalAlign: 'middle' }} />
                </a>
            </sub>
        );
        const image = post.preview
            ? (post.preview.images[0].resolutions.length > 0
                ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&')
                : 'http://lorempixel.com/108/81/'
            )
            : 'http://lorempixel.com/108/81/';
        return (
            <Card key={i} style={style}>
                <img src={image} alt={post.title} height={81} width={101} style={{ padding: '16px', paddingRight: '0px', float: 'left' }} />
                <CardHeader
                    title={post.title}
                    titleStyle={{ padding: '16px', paddingTop: '8px' }}
                    actAsExpander
                />
                {link}
                <CardText actAsExpander expandable>
                    {post.selftext}
                </CardText>
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
