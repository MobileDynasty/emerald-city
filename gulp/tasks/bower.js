var gulp = require('gulp');
var bower = require('gulp-bower');

var bowerConfig = require('../config').bower;

gulp.task('bower', function () {
    return bower().pipe(gulp.dest(bowerConfig.dest));
});