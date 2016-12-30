import _ from 'underscore';
import React from 'react';
import { Responsive } from 'react-grid-layout';
import calculateLayout from './calculate-layout';
import equip from './equip';

/*
 * A simple HOC that provides facility for listening to container resizes.
 */
const StaticResponsiveGrid = ({ window, maxWidth, itemWidth, itemHeight, items }) => {
    const layoutCount = maxWidth / itemWidth;
    const layoutConfig = calculateLayout(layoutCount, items.length, itemWidth);
    let width = window.width;
    const inRange = _.some(layoutConfig.widths, (layoutWidth) => {
        if (width > layoutWidth) {
            if (width !== layoutWidth) {
                width = layoutWidth;
            }
            return true;
        }
        return false;
    });
    if (!inRange && width !== itemWidth) {
        width = itemWidth;
    }
    return (
        <div className="layout" style={{ width: `${width}px`, margin: 'auto' }}>
            <Responsive
                width={width}
                className="layout"
                autoSize={false}
                layouts={layoutConfig.layouts}
                breakpoints={layoutConfig.breakpoints}
                cols={layoutConfig.cols}
                rowHeight={itemHeight}
            >
                {items}
            </Responsive>
        </div>
    );
};

export default equip(StaticResponsiveGrid);
