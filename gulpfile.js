const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path');

const clear =require('./task/clear');
// const view = require('./task/html');
const view = require('./task/pug');
const serve = require('./task/serve');

exports.view = view;
exports.clear = clear;
exports.serve = serve;

exports.dev = series(
    clear,
    view,
    serve
)