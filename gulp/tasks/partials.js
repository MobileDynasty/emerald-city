var gulp = require('gulp');

var partialsConfig = require('../config').partials;


gulp.task('partials', [], function() {
    return gulp.src(partialsConfig.src)
        .pipe(gulp.dest(partialsConfig.dest));
});