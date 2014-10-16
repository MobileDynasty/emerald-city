var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var browserSync = require("browser-sync");
var _ = require('lodash');

var config = require('../config');
var bowerConfig = config.bower;
var browserifyConfig = config.browserify;
var scriptConfig = config.scripts;


gulp.task('bundle-vendor', ['bower'], function() {

    var b = browserify(scriptConfig.vendorSrc, { debug: true });
    var packageIds = _.difference(bowerConfig.packageIds, browserifyConfig.ignorePackages);

    packageIds.forEach(function(id) {
        var alias = (_.has(browserifyConfig.aliases, id)) ? browserifyConfig.aliases[id] : id;
        gutil.log("Adding Vendor Module: " + id + ", alias: " + alias);
        b.require(bowerResolve.fastReadSync(id), { expose: alias });
    });

    return b.bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest(scriptConfig.dest));
});

gulp.task('bundle-app', ['bower'], function() {

    var b = browserify(scriptConfig.appSrc, { debug: true });
    var packageIds = _.difference(bowerConfig.packageIds, browserifyConfig.ignorePackages);

    packageIds.forEach(function(id) {
        var alias = (_.has(browserifyConfig.aliases, id)) ? browserifyConfig.aliases[id] : id;
        gutil.log("External Package: " + id);
        b.external(bowerResolve.fastReadSync(id));
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(scriptConfig.dest))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts',['bower', 'bundle-app', 'bundle-vendor']);