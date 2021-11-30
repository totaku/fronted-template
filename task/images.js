const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

module.exports = function images() {
    return src(path.images.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Images',
            message: error.message
        }))
    }))
    .pipe(newer(path.images.dest)) 
    .pipe(webp())
    .pipe(dest(path.images.dest))
    .pipe(src(path.images.src))
    .pipe(newer(path.images.dest)) 
    .pipe(imagemin([
        imagemin.gifsicle(param.imageminGIF),
        imagemin.mozjpeg(param.imageminJPG),
        imagemin.optipng(param.imageminPNG),
        imagemin.svgo(param.imageminSVGO)
      ]))
    .pipe(dest(path.images.dest));
}