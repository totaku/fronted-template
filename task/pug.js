const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');
const webpHtml = require('gulp-webp-html');

const pug = () =>{
    return src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Pug',
            message: error.message
        }))
    }))
    .pipe(pugs(param.pug))
    .pipe(webpHtml())
    .pipe(dest(path.pug.dest));
}

module.exports = pug;