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
    mincss: {
        compatibility: "ie8", level: {
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
    }
}