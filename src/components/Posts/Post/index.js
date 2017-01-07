import _ from 'underscore';
import React from 'react';
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
            <sub style={{ position: 'absolute', bottom: '16px', right: '16px', color: muiTheme.card.subtitleColor, textAlign: 'right' }}>
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
                <div
                    onTouchMove={this.move}
                    onTouchEnd={this.swiped}
                    onTouchStart={this.start}
                    style={_.extend({
                        marginLeft: `${right}px`,
                        transition,
                        opacity,
                        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
                        boxBorder: 'border-box',
                        fontFamily: 'Roboto, sans-serif',
                        color: 'rgb(255, 255, 255)',
                        backgroundColor: 'rgb(66, 66, 66)',
                        borderRadius: '2px',
                        zIndex: 1,
                        position: 'relative',
                    }, _.omit(style, 'opacity', 'height'))}
                >
                    <a
                        href={post.url}
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 500,
                            fontSize: '15px',
                            verticalAlign: 'top',
                            color: muiTheme.card.title,
                        }}
                    >
                        <div style={{ overflow: 'auto' }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                height={81}
                                width={101}
                                style={{
                                    padding: '16px',
                                    float: 'left',
                                    width: '25%',
                                }}
                            />
                            <div
                                style={{
                                    verticalAlign: 'top',
                                    padding: '16px',
                                    paddingTop: '24px',
                                }}
                            >{post.title}</div>
                        </div>
                        <div style={{ position: 'relative', height: '24px', width: '100%' }}>
                            {link}
                        </div>
                    </a>
                </div>
            </div>
        );
    },
});

export default muiThemeable()(equip(Post));
