const calculateLayout = (layoutCount, itemCount, itemWidth) => {
    const layoutConfig = {
        cols: {},
        breakpoints: {},
        widths: [],
        layouts: {},
    };
    for (let i = 0; i < layoutCount; i++) {
        layoutConfig.widths.push((i + 1) * itemWidth);
        layoutConfig.cols[i] = i + 1;
        layoutConfig.breakpoints[i] = i * itemWidth;
        layoutConfig.layouts[i] = [];

        for (let j = 0; j < itemCount; j++) {
            layoutConfig.layouts[i].push({
                i: j.toString(),
                x: j % (i + 1),
                y: Math.floor(j / (i + 1)),
                w: 1,
                h: 1,
                static: true,
            });
        }
    }
    layoutConfig.widths.reverse();
    return layoutConfig;
};

export default calculateLayout;
