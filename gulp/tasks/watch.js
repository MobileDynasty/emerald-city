var gulp = require('gulp');
var browserSync = require("browser-sync");
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
   gulp.watch(config.css.src, ['css']);
   gulp.watch(config.images.src, ['images', browserSync.reload]);
   gulp.watch(config.partials.src, ['partials', browserSync.reload]);
   gulp.watch(config.scripts.src, ['scripts']);
   gulp.watch(config.templates.src, ['templates', browserSync.reload]);
});