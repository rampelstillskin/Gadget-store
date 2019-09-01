const gulp 							= require("gulp");
const autoprefixer 			= require("gulp-autoprefixer");
const browserSync 			= require("browser-sync").create();
const plumber 					= require("gulp-plumber");
const sass 							= require("gulp-sass");
const minify						= require("gulp-csso");
const rename 						= require("gulp-rename");
const imagemin 					= require("gulp-imagemin");
const del								= require("del");

gulp.task("clean", () => del("build"));

gulp.task("sass", () => gulp.src("app/sass/**/*.scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(autoprefixer({
		overrideBrowserslist: ["last 5 versions"],
	}))
	.pipe(gulp.dest("app/css"))
	.pipe(browserSync.stream())
	.pipe(sass({
		outputStyle: "compressed" })
		.on("error", sass.logError)));

gulp.task("minify", () => gulp.src("app/css/style.css")
	.pipe(minify())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("app/css")));

gulp.task("images", () => gulp.src("app/image/**/*.{png,svg,	jpg}")
	.pipe(imagemin([
		imagemin.optipng({ optimizationLevel: 3 }),
		imagemin.jpegtran({ progressive: true }),
		imagemin.svgo(),
	]))
	.pipe(gulp.dest("app/image")));

gulp.task("serve", () => {
	browserSync.init({
		server: {
			baseDir: "./app",
		},
	});
	gulp.watch("app/sass/**/*.scss", gulp.series("sass"));
	gulp.watch("app/*.html").on("change", browserSync.reload);
});

gulp.task("copy", () => gulp.src([
	"app/*.html",
	"app/fonts/**/*.woff2",
	"app/image/**",
	"app/js/**",
	"app/css/*.css",
], {
	base: "app/",
})
	.pipe(gulp.dest("build")));


gulp.task("default", gulp.parallel("minify", "sass", "serve"));
gulp.task("build", gulp.series("clean", "copy", "sass", "images"));
