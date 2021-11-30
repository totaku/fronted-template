const { watch, series, parallel} = require('gulp');

const path = require('./config/path');

const clear =require('./task/clear');
// const html = require('./task/html');
const pug = require('./task/pug');

// exports.html = html;
exports.pug = pug;
exports.clear = clear;