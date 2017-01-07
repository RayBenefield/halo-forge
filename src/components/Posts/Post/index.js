import _ from 'underscore';
import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import equip from './equip';
import * as styles from '../index.css';

const time = require('time-ago')();

const smooth = 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
const fast = '';

const Post = React.createClass({
    getInitialState() {
        return { right: 0, transition: smooth, opacity: 1, className: styles['new-item'] };
    },
    move(e) {
        const delta = e.nativeEvent.touches[0].clientX - this.state.start;
        this.setState({ right: delta, opacity: (1 - Math.abs(delta) / 400) - 0.2 });
    },
    swiped() {
        if (this.state.right > 30) {
            setTimeout(() => {
                this.remove(this);
                this.add();
                this.setState({ right: 0, start: 0, transition: smooth, opacity: 1 });
            }, 1000);
            this.setState({ right: 400, start: 0, transition: smooth, opacity: 0, className: styles['remove-item'] });
            return;
        } else if (this.state.right < -30) {
            setTimeout(() => {
                this.remove(this);
                this.drop();
                this.setState({ right: 0, start: 0, transition: smooth, opacity: 1 });
            }, 1000);
            this.setState({ right: -400, start: 0, transition: smooth, opacity: 0, className: styles['remove-item'] });
            return;
        }
        this.setState({ right: 0, start: 0, transition: smooth, opacity: 1 });
    },
    start(e) {
        this.setState({ start: e.nativeEvent.touches[0].clientX, transition: fast, opacity: 0.8 });
    },
    render() {
        const { post, style, muiTheme, add, drop, remove } = this.props;
        this.add = add;
        this.drop = drop;
        this.remove = remove;

        const { right, transition, opacity, className } = this.state;
        const link = (
            <sub style={{ width: '100%', position: 'absolute', bottom: '0px', right: '0px', color: muiTheme.card.subtitleColor, textAlign: 'right', padding: '16px' }}>
                <a href={post.sourceUrl}>{time.ago(post.added)} • {post.source} <img src={post.sourceImage} alt={post.title} style={{ paddingLeft: '8px', verticalAlign: 'middle' }} /></a>
            </sub>
        );
        return (
            <div
                className={className}
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    transition: 'flex-grow 500ms linear',
                    maxHeight: '128px',
                    margin: 'auto',
                }}
            >
                <div style={{ position: 'relative', display: 'inline-block' }} onTouchMove={this.move} onTouchEnd={this.swiped} onTouchStart={this.start}>
                    <Card style={_.extend({ marginLeft: `${right}px`, transition, opacity }, _.omit(style, 'opacity'))}>
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
            </div>
        );
    },
});

export default muiThemeable()(equip(Post));
