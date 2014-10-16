var gulp = require('gulp');

var fontConfig = require('../config').fonts;

gulp.task('bootstrap-fonts', ['bower'], function() {
    return gulp.src(fontConfig.bootstrap.src + '/*')
        .pipe(gulp.dest(fontConfig.dest));
});

gulp.task('font-awesome', ['bower'], function() {
    return gulp.src(fontConfig.fontAwesome.src + '/*')
        .pipe(gulp.dest(fontConfig.dest));
});

gulp.task('fonts', [ 'bootstrap-fonts', 'font-awesome' ]);