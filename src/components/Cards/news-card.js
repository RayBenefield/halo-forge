import assign from 'lodash/assign';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import React from 'react';
import classes from 'classnames';
import equip from './equip';
import SiteAttribution from './site-attribution';

const smooth = 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
const fast = '';

const NewsCard = React.createClass({
    getInitialState() {
        return { right: 0, transition: smooth, opacity: 1 };
    },
    start(e) {
        if (!this.isTouching && !this.isMousing && e.type === 'touchstart') {
            this.origin = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            this.setState({ transition: fast, opacity: 0.8 });
            this.isTouching = true;
        }
        if (!this.isTouching && !this.isMousing && e.type === 'mousedown') {
            this.origin = { x: e.clientX, y: e.clientY };
            this.setState({ transition: fast, opacity: 0.8 });
            this.isMousing = true;
        }
        window.addEventListener('mouseup', this.swiped);
        window.addEventListener('mousemove', this.move);
    },
    move(e) {
        let current;
        if (this.isTouching && e.type === 'touchmove') {
            current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (this.isMousing && e.type === 'mousemove') {
            current = { x: e.clientX, y: e.clientY };
        } else {
            return;
        }
        if (!this.isScrolling && !this.isDragging) {
            const xDistance =
                Math.abs(current.x - this.origin.x) - Math.abs(current.y - this.origin.y);
            const isHorizontal = xDistance > 0;
            if (isHorizontal) {
                this.isScrolling = false;
                this.isDragging = true;
            } else {
                this.isScrolling = true;
                this.isDragging = false;
                this.setState({ right: 0, transition: smooth, opacity: 1 });
            }
        }
        if (this.isDragging) {
            e.preventDefault();
            const delta = current.x - this.origin.x;
            this.setState({ right: delta, opacity: (1 - Math.abs(delta) / 400) - 0.2 });
        }
    },
    clicked(e) {
        if (this.isScrolling) return;
        e.preventDefault();
    },
    swiped(e) {
        if (!this.isScrolling) {
            e.preventDefault();
            if (this.state.right > 50) {
                this.add();
                this.setState({ right: 400, transition: smooth, opacity: 0 });
            } else if (this.state.right < -50) {
                this.drop();
                this.setState({ right: -400, transition: smooth, opacity: 0 });
            } else {
                this.setState({ right: 0, transition: smooth, opacity: 1 });
            }
        }

        this.origin = 0;
        this.isMousing = false;
        this.isTouching = false;
        this.isScrolling = false;
        this.isDragging = false;
        window.removeEventListener('mousemove', this.move);
        window.removeEventListener('mouseup', this.swiped);
    },
    render() {
        const { post, style, add, drop, show = false } = this.props;
        this.add = add;
        this.drop = drop;
        const { right, transition, opacity } = this.state;
        const sourceProps = pick(post, 'source', 'sourceImage', 'sourceUrl', 'title', 'added');

        return (
            <div
                onMouseDown={this.start}
                onClick={this.clicked}
                onTouchMove={this.move}
                onTouchEnd={this.swiped}
                onTouchStart={this.start}
                className={classes('relative', 'mt2', 'z-depth-2', 'roboto', 'white-text', 'bg-grey-800', 'br1')}
                style={assign({
                    transform: show ? `translateX(${right}px)` : 'translate(-400px)',
                    transition,
                    opacity: show ? opacity : 0,
                }, omit(style, 'opacity', 'height'))}
            >
                <a href={post.url} className={classes('roboto fw5')}>
                    <div className={classes('overflow-auto')}>
                        <img src={post.image} alt={post.title} className={classes('pa3', 'pr4', 'fl', 'w-25')} />
                        <div className={classes('v-top', 'pa3')}>
                            {post.title}
                            <SiteAttribution {...sourceProps} />
                        </div>
                    </div>
                </a>
            </div>
        );
    },
});

export default equip(NewsCard);
