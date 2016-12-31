import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';
import rHalo from './r-halo.png';
import rHaloImage from './r-halo-image.png';

const Posts = ({ style, posts, muiTheme }) => {
    const postCards = posts.map((post, i) => {
        const link = (
            <sub style={{ width: '100%', position: 'fixed', bottom: '0px', right: '0px', color: muiTheme.card.subtitleColor, textAlign: 'right', padding: '16px' }}>
                22 hours ago • /r/halo <img src={rHalo} alt={post.title} style={{ paddingLeft: '8px', verticalAlign: 'middle' }} />
            </sub>
        );
        const image = post.preview
            ? (post.preview.images[0].resolutions.length > 0
                ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&')
                : rHaloImage
            )
            : rHaloImage;
        return (
            <Card key={i} style={style}>
                <a href={post.url}>
                    <img src={image} alt={post.title} height={81} width={101} style={{ padding: '16px', paddingRight: '0px', float: 'left' }} />
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
