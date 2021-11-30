const { series, parallel } = require('gulp');

const path = require('./config/path');

const clear =require('./task/clear');
const serve = require('./task/serve');
// const view = require('./task/html');
const view = require('./task/pug');
const styles = require('./task/styles');
const scripts = require('./task/scripts');
const images = require('./task/images');
const fonts = require('./task/fonts');
const favicon = require('./task/favicon');
const sprites = require('./task/sprites');

exports.view = view;
exports.clear = clear;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.favicon = favicon;
exports.sprites = sprites;

exports.dev = series(
    clear,
    images,
    fonts,
    favicon,
    sprites,
    parallel (view, styles, scripts),
    serve
)