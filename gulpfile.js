const { parallel } = require('gulp');
const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require("gulp-rename"),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src("src/scss/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function(){
    return gulp.src([
                     "node_modules/jquery/dist/jquery.min.js",
                     "node_modules/slick-carousel/slick/slick.min.js",
                     "node_modules/jquery-validation/dist/jquery.validate.min.js",
                     "src/js/_script.js"
                    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
  });

gulp.task('watch', function(){
    gulp.watch("src/scss/**/*.+(scss|sass)", gulp.parallel("styles"))
    gulp.watch(['src/js/_script.js'], gulp.parallel('scripts'));
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts'))