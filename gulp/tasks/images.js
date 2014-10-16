var gulp = require('gulp');

var imagesConfig = require('../config').images;


gulp.task('images', [], function() {
    return gulp.src(imagesConfig.src)
        .pipe(gulp.dest(imagesConfig.dest));
});