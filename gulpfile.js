const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path');

const clear =require('./task/clear');
const serve = require('./task/serve');
// const view = require('./task/html');
const view = require('./task/pug');
const styles = require('./task/styles');
const scripts = require('./task/scripts');
const images = require('./task/images')


exports.view = view;
exports.clear = clear;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;

exports.dev = series(
    clear,
    images,
    parallel (view, styles, scripts),
    serve
)