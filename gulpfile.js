const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path');

const clear =require('./task/clear');
const serve = require('./task/serve');
// const view = require('./task/html');
const view = require('./task/pug');
const style = require('./task/style');


exports.view = view;
exports.clear = clear;
exports.style = style;

exports.dev = series(
    clear,
    parallel (view, style),
    serve
)