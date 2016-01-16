var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('scripts', function () {

		var js = Gulp.src('./src/js/*')
		        .pipe(Gulp.dest(Path.join('./public/assets', 'js')));

		var vendor = Gulp.src('./src/js/vendor/*')
		        .pipe(Gulp.dest(Path.join('./public/assets/js', 'vendor')));

    return Merge(js);
});
