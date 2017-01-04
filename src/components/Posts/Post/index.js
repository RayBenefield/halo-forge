import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import equip from './equip';

const time = require('time-ago')();

const Post = ({ post, style, muiTheme }) => {
    const link = (
        <sub style={{ width: '100%', position: 'absolute', bottom: '0px', right: '0px', color: muiTheme.card.subtitleColor, textAlign: 'right', padding: '16px' }}>
            <a href={post.sourceUrl}>{time.ago(post.added)} • {post.source} <img src={post.sourceImage} alt={post.title} style={{ paddingLeft: '8px', verticalAlign: 'middle' }} /></a>
        </sub>
    );
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Card style={style}>
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
        </div>
    );
};

export default equip(muiThemeable()(Post));
