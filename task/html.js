const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpHtml = require('gulp-webp-html');

const html = () =>{
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Html',
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: 'До сжатия:'}))
    .pipe(htmlmin(param.htmlmin))
    .pipe(size({ title: 'После сжатия:'}))
    .pipe(dest(path.html.dest));
}

module.exports = html;