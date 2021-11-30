const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const favicons = require('gulp-favicons');

module.exports = function favicon() {
    return src(path.favicon.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Favicon',
            message: error.message
        }))
    }))
    .pipe(favicons(param.favicon))
    .pipe(dest(path.favicon.dest));
}