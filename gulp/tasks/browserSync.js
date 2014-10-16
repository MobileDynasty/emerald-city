var gulp        = require('gulp');
var browserSync = require('browser-sync');
var syncConfig  = require('../config').browserSync;

gulp.task('sync-reload', function () {
    browserSync.reload();
});

gulp.task('browserSync', ['build'], function() {
   browserSync(syncConfig);
});