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
    },
    images: {
        src: [pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}', !pathSrc + '/img/favicon/*.{jpg,jpeg,png,gif,tiff}'],
        watch: [pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}', !pathSrc + '/img/favicon/*.{jpg,jpeg,png,gif,tiff}'],
        dest: pathDest + '/img'
    },
    favicon: {
        src: pathSrc + '/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
        watch: pathSrc + '/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
        dest: pathDest + '/img/favicons'
    },
    fonts: {
        src: pathSrc + '/fonts/*.{eot,ttf,otc,ttc,woff,woff2,otf,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otc,ttc,otf,woff,woff2,svg}',
        dest: pathDest + '/fonts'
    },
    sprites: {
        src: pathSrc + '/sprites/*.svg',
        watch: pathSrc + '/sprites/**/*.svg',
        dest: pathDest + '/img/sprites'
    }
}