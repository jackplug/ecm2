var gulp = require('gulp');
var twig = require('gulp-twig');
var htmlbeautify = require('gulp-html-beautify');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var reload = browserSync.reload;

gulp.task('default', function() {
    gulp.watch(['src/**/*'], ['css', 'htmlbeautify']);
});

gulp.task('templates', function() {
    return gulp.src('src/*.html') // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig())
        .pipe(gulp.dest('html')); // output the rendered HTML files to the "html" directory
});

gulp.task('htmlbeautify', ['templates'], function() {
    var options = {
        indentSize: 4
    };
    gulp.src('./html/*.html')
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', function () {
    return gulp.src('./src/styles/*.css')
        .pipe(postcss([
                require('postcss-partial-import')({ /* options */ })
            ])
        )
        .pipe(gulp.dest('public/styles'));
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'public'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'public'}, reload);
});
