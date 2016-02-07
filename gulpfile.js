"use strict";

var gulp = require("gulp");

var files = {
    html: ["src/html/**/*.html"],
    media: ["src/media/**/*"]
};

gulp.task("copyHtml", function() {

    gulp.src(files.html)
        .pipe(gulp.dest("public"));

});

gulp.task("copyMedia", function() {

    gulp.src(files.media)
        .pipe(gulp.dest("public/media"));

});

gulp.task("test", function() {
    // TODO: Setup testing.
});

gulp.task("build", ["copyHtml", "copyMedia"]);

gulp.task("watch", ["build"], function() {
    gulp.watch(files.html.concat(files.media), ["build"]);
});

gulp.task("default", ["watch"]);
