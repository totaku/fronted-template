const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('../config/path');

// const view = require('./html');
const view = require('./pug');
const styles = require('./styles');
const scripts = require('./scripts');

module.exports = function serve(cb) {
    browserSync.init({
        server:{ baseDir: path.root },
        notify: false,
        open: true,
        cors: true,
        browser: "FirefoxDeveloperEdition",
        port: 3000
    });

    watch(path.js.watch, series(scripts)).on('all', browserSync.reload);
    watch(path.style.watch, series(styles)).on('all', browserSync.reload);
    watch(path.view.watch, series(view)).on('all', browserSync.reload);

  return cb()
};