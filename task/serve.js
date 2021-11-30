const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('../config/path');

// const view = require('./html');
const view = require('./pug');
const style = require('./style');

module.exports = function serve(cb) {
    browserSync.init({
        server:{ baseDir: path.root },
        notify: false,
        open: true,
        cors: true,
        browser: "FirefoxDeveloperEdition",
        port: 3000
    });

    watch(path.style.watch, series(style)).on('all', browserSync.reload);
    watch(path.view.watch, series(view)).on('all', browserSync.reload);

  return cb()
};