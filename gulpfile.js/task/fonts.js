const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter-unx');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = function font() {
    src(path.fonts.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Fonts',
            message: error.message
        }))
    }))
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(param.fonter))
    .pipe(dest(path.fonts.dest));
    return src(path.fonts.src)
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.dest));
}