const { watch, series, parallel} = require('gulp');

const path = require('./config/path')

const html = require('./task/html')

exports.html = html;