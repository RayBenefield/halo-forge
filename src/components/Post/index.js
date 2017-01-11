import _ from 'underscore';
import React from 'react';
import equip from './equip';
import animate from './animate';
import SiteAttribution from './site-attribution';

const smooth = 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
const fast = '';

const Post = React.createClass({
    getInitialState() {
        return { right: 0, transition: smooth, opacity: 1 };
    },
    start(e) {
        this.origin = { x: e.nativeEvent.touches[0].clientX, y: e.nativeEvent.touches[0].clientY };
        this.setState({ transition: fast, opacity: 0.8 });
    },
    move(e) {
        const touch = { x: e.nativeEvent.touches[0].clientX, y: e.nativeEvent.touches[0].clientY };
        const xDistance = Math.abs(touch.x - this.origin.x) - Math.abs(touch.y - this.origin.y);
        const isHorizontal = xDistance > 25;
        const delta = isHorizontal ? touch.x - this.origin.x : 0;
        this.setState({ right: delta, opacity: (1 - Math.abs(delta) / 400) - 0.2 });
    },
    swiped() {
        if (this.state.right > 50) {
            this.add();
            this.origin = 0;
            this.setState({ right: 400, transition: smooth, opacity: 0 });
            return;
        } else if (this.state.right < -50) {
            this.drop();
            this.origin = 0;
            this.setState({ right: -400, transition: smooth, opacity: 0 });
            return;
        }
        this.origin = 0;
        this.setState({ right: 0, transition: smooth, opacity: 1 });
    },
    render() {
        const { post, style, add, drop, show = false } = this.props;
        this.add = add;
        this.drop = drop;
        const { right, transition, opacity } = this.state;
        const sourceProps = _.pick(post, 'source', 'sourceImage', 'sourceUrl', 'title', 'added');

        return (
            <div className="m-auto">
                <div
                    onTouchMove={this.move}
                    onTouchEnd={this.swiped}
                    onTouchStart={this.start}
                    className="relative mt2 z-depth-2 roboto white bg-grey-800 br1"
                    style={_.extend({
                        transform: show ? `translateX(${right}px)` : 'translate(-400px)',
                        transition,
                        opacity: show ? opacity : 0,
                    }, _.omit(style, 'opacity', 'height'))}
                >
                    <a href={post.url} className="roboto fw5">
                        <div className="overflow-auto">
                            <img src={post.image} alt={post.title} className="pa3 pr4 fl w-25" />
                            <div className="v-top pa3">
                                {post.title}
                                <SiteAttribution {...sourceProps} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    },
});

export default animate(equip(Post));
