var gulp = require('gulp');
var browserSync = require("browser-sync");

var templatesConfig = require('../config').templates;

//gulp.task('inject', ['scripts', 'views'], function() {
//    return gulp.src(build.index)
//        .pipe(inject(
//            gulp.src([build.js + '/' + libsjs,
//                    build.js + '/' + appjs,
//                    build.css + '/' + styles],  {read: false}),
//            {
//                addPrefix: 'static/',
//                addRootSlash: false,
//                ignorePath: '/build/'
//            }
//        ))
//        .pipe(livereload(server))
//        .pipe(gulp.dest(build.views));
//});

gulp.task('templates', [], function() {
    return gulp.src(templatesConfig.src)
        .pipe(gulp.dest(templatesConfig.dest));
});