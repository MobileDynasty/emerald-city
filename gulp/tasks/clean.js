var gulp = require('gulp');
var rimraf = require('rimraf');

var config = require('../config');

gulp.task('clean', function() {
    rimraf.sync(config.build);
});