const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const webpHtml = require('gulp-webp-html');

module.exports = function view() {
    return src(path.view.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Pug',
            message: error.message
        }))
    }))
    .pipe(pug(param.pug))
    .pipe(webpHtml())
    .pipe(dest(path.view.dest));
}