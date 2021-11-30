const { watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path');

const clear =require('./task/clear');
// const html = require('./task/html');
const pug = require('./task/pug');

const server = () =>{
    browserSync.init({
        server:{ baseDir: path.root },
        notify: false,
        open: true,
        cors: true,
        browser: "FirefoxDeveloperEdition",
        port: 3000
    });
}

const watcher = () =>{
    watch(path.pug.watch, pug).on('all', browserSync.reload); 
}

// exports.html = html;
exports.pug = pug;
exports.clear = clear;

exports.dev = series(
    clear,
    pug,
    parallel(watcher, server)
)