const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const uglify = require("gulp-uglify")
const htmlmin = require("gulp-htmlmin")
const imagemin = require("gulp-imagemin")
const concat = require("gulp-concat")
const cleanCSS = require("gulp-clean-css")
const rename = require("gulp-rename")
const sourcemaps = require("gulp-sourcemaps")
const autoprefixer = require("gulp-autoprefixer")
const browserSync = require("browser-sync").create()
const del = require("del")

// Caminhos dos arquivos
const paths = {
  html: {
    src: "src/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/images/",
  },
  vendor: {
    src: "node_modules/jquery/dist/jquery.min.js",
    dest: "dist/js/vendor/",
  },
}

// Limpar pasta dist
function clean() {
  return del(["dist"])
}

// Processar HTML
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream())
}

// Processar SCSS
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
}

// Processar JavaScript
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream())
}

// Copiar jQuery
function vendor() {
  return gulp.src(paths.vendor.src).pipe(gulp.dest(paths.vendor.dest))
}

// Otimizar imagens
function images() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ]),
    )
    .pipe(gulp.dest(paths.images.dest))
}

// Servidor de desenvolvimento
function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  })
}

// Observar mudanças
function watch() {
  gulp.watch(paths.html.src, html)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.images.src, images)
}

// Tarefas
const build = gulp.series(clean, gulp.parallel(html, styles, scripts, vendor, images))
const dev = gulp.series(build, gulp.parallel(serve, watch))

exports.clean = clean
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.images = images
exports.vendor = vendor
exports.serve = serve
exports.watch = watch
exports.build = build
exports.dev = dev
exports.default = build
