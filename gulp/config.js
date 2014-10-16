var _ = require('lodash');
var util = require('gulp-util');

var build = './build';
var webDest = build + '/web';
var src = './websrc';
var vendor = webDest + '/vendor';

var bootstrap = vendor + '/bootstrap-sass-official/assets';
var dev = util.env.type !== 'production';

var bowerManifest = require('../bower.json');
var logLevel = dev ? "debug" : "info";


module.exports = {

    src: src,
    build: build,
    webBuild: webDest,
    dev: dev,

    bower: {
        dest: vendor,
        manifest: bowerManifest,
        packageIds: _.keys(bowerManifest.dependencies)
    },

    browserify: {
        aliases: {
        },
        ignorePackages: ['bootstrap-sass-official', 'font-awesome']
    },

    browserSync: {
        proxy: "localhost:8888",
        port: 8000,
        logLevel: logLevel,
        open: false,
        reloadDelay: 2000,
        injectChanges: true
    },

    css: {
        src: src + '/scss/*.scss',
        dest: webDest + '/css',
        loadPath: [bootstrap + '/stylesheets', vendor + '/font-awesome/scss']
    },

    fonts: {
        bootstrap: {
            src: bootstrap + '/fonts/bootstrap'
        },
        fontAwesome: {
            src: vendor + '/font-awesome/fonts'
        },
        dest: webDest + '/fonts'
    },

    images: {
        src: src + '/img/**',
        dest: webDest + '/img'
    },

    partials: {
        src: src + '/partials/**/*.html',
        dest: webDest + '/partials'
    },

    templates: {
        src: src + '/templates/**/*.html',
        dest: webDest + '/templates'
    },

    scripts: {
        src: src + '/js/**/*.js',
        appSrc: src + '/js/app/app.js',
        vendorSrc: src + '/js/app/vendor.js',
        dest: webDest + '/js'
    }
};