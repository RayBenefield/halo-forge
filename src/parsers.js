import { NEW } from './actions';
import rHaloImage from './r-halo-image.png';
import rHaloSource from './r-halo.png';

export default {
    reddit: (subreddit, results) => results.data.children.map((child) => {
        const post = child.data;
        // eslint-disable-next-line no-nested-ternary
        const image = post.preview
            ? (post.preview.images[0].resolutions.length > 0
                ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&')
                : post.preview.images[0].source.url
            )
            : rHaloImage;
        return {
            status: NEW,
            url: post.url,
            title: post.title,
            image,
            source: 'reddit',
            subreddit,
            sourceId: post.id,
            sourceImage: rHaloSource,
            sourceUrl: `https://www.reddit.com/${post.permalink}`,
            added: post.created_utc * 1000,
        };
    }),
};
