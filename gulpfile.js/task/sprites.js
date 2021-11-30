const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const spriteSVG = require('gulp-svg-sprite');

module.exports = function sprites() {
    return src(path.sprites.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Sprites',
            message: error.message
        }))
    }))
    .pipe(spriteSVG(param.sprites))
    .pipe(dest(path.sprites.dest));
}