var gulp = require('gulp');
var prettyHtml = require('gulp-pretty-html');
const cprint = require("cprint")
gulp.task('prettify', function () {
    return gulp.src('docs/*.html')
        .pipe(prettyHtml())
        .pipe(gulp.dest('docs'));
});

cprint("mediflex" , "random")