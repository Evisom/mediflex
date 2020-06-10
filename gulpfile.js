var gulp = require('gulp');
var prettyHtml = require('gulp-pretty-html');
 
gulp.task('prettify', function () {
    return gulp.src('docs/*.html')
        .pipe(prettyHtml())
        .pipe(gulp.dest('docs'));
});