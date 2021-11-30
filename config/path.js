const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },
    // view: {
    //     src: [pathSrc + '/html/*.html', pathSrc + '/html/pages/*.html'],
    //     watch: pathSrc + '/html/**/*.html',
    //     dest: pathDest
    // },
    view: {
        src: [pathSrc + '/pug/*.pug', pathSrc + '/pug/pages/*.pug'],
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },
    style: {
        src: pathSrc + '/style/*.{sass,scss}',
        watch: pathSrc + '/style/**/*.{sass,scss}',
        dest: pathDest + '/style'
    },
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    }
}