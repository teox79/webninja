// next.config.js
const withLess = require('@zeit/next-less')

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    devIndicators: {
        autoPrerender: false,
    },
    trailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
})
