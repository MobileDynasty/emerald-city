var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var filter = require('gulp-filter');
var browserSync = require("browser-sync");

var cssConfig = require('../config').css;


gulp.task('sass', [ 'bower' ], function() {
    return gulp.src(cssConfig.src)
        .pipe(sass({
            sourcemapPath: '../scss',
            style: 'expanded',
            loadPath: cssConfig.loadPath
        }))
        .on('error', function (err) { console.log("Error: " + err.message); })
        .pipe(gulp.dest(cssConfig.dest))
        .pipe(filter('**/*.css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', ['sass']);