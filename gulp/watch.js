var Gulp = require('gulp');


Gulp.task('watch', function () {

    global.isWatching = true;
    Gulp.watch('./src/*.scss', ['sass']);
    Gulp.watch('./src/*/*.scss', ['sass']);
    Gulp.watch('./src/*/*/*.scss', ['sass']);

    Gulp.watch('./*.ts', ['typescript']);
    Gulp.watch('./**/*.ts', ['typescript']);
    Gulp.watch('./**/*/*.ts', ['typescript']);
    Gulp.watch('./**/*/*/*.ts', ['typescript']);

    Gulp.watch('./*.html', ['nunjucks']);
    Gulp.watch('./**/*.html', ['nunjucks']);
    Gulp.watch('./**/*/*.html', ['nunjucks']);
    Gulp.watch('./**/*/*/*.html', ['nunjucks']);
});
