const { src, dest } = require('gulp');

const path = require('../config/path');
const param = require('../config/param');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel'); 
const webpack = require('webpack-stream');

const js = () =>{
    return src(path.js.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'JavaScript',
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(param.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: '.' }));
}

module.exports = js;