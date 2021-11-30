module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },
    pug: {
        pretty: true,
        data: {
            news: require('../data/news.json')
        }
    },
    cssmin: {
        compatibility: 'ie8', level: {
            1: {
                specialComments: 0,
                removeEmpty: true,
                removeWhitespace: true
            },
            2: {
                mergeMedia: true,
                removeEmpty: true,
                removeDuplicateFontRules: true,
                removeDuplicateMediaBlocks: true,
                removeDuplicateRules: true,
                removeUnusedAtRules: false
            }
        }
    },
    fonter: {
        formats: ['ttf', 'woff', 'svg']
    },
    webpack: {
        mode: 'development'
    },
    imageminGIF:{
        interlaced: true
    },
    imageminPNG: {
        speed: 5,
        quality: [0.6, 0.8]
    },
    imageminJPG: {
        progressive: true,
        quality: 75
    },
    imageminSVGO: {
        plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
            { cleanupIDs: false },
            { removeComments: true },
            { removeEmptyAttrs: true },
            { removeEmptyText: true },
            { collapseGroups: true }
        ]
    },
    imageminWEBP: {
        lossless: true,
        quality: 100,
        alphaQuality: 100
    }
}