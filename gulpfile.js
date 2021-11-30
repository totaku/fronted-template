const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path');

const clear =require('./task/clear');
const serve = require('./task/serve');
// const view = require('./task/html');
const view = require('./task/pug');
const styles = require('./task/styles');
const scripts = require('./task/scripts');


exports.view = view;
exports.clear = clear;
exports.styles = styles;
exports.scripts = scripts;

exports.dev = series(
    clear,
    parallel (view, styles, scripts),
    serve
)