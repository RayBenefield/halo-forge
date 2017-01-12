import toolbox from 'sw-toolbox';

toolbox.router.get('/(.*)', toolbox.networkFirst, {origin: 'https://www.reddit.com'});
toolbox.router.get('/(.*)', toolbox.cacheFirst, {origin: 'https://i.redditmedia.com'});
