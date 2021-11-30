const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const mincss = require('gulp-clean-css');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

module.exports = function style() {
    return src(path.style.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Style',
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.style.dest, { sourcemaps: true }))
    .pipe(size({ title: 'main.css'}))
    .pipe(mincss(param.mincss))
    .pipe(size({ title: 'main.min.css'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.style.dest, { sourcemaps: '.' }));
}