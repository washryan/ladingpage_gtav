const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const htmlmin = require("gulp-htmlmin")
const imagemin = require("gulp-imagemin")
const cleanCSS = require("gulp-clean-css")
const rename = require("gulp-rename")
const sourcemaps = require("gulp-sourcemaps")
const autoprefixer = require("gulp-autoprefixer")
const browserSync = require("browser-sync")
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
  images: {
    src: "src/images/**/*",
    dest: "dist/images/",
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
        }
    })
}

// Observar mudanças
function watch() {
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.images.src, images)
}

// Tarefas
const build = gulp.series(clean, gulp.parallel(html, styles, images))
const dev = gulp.series(build, gulp.parallel(serve, watch))

exports.clean = clean
exports.html = html
exports.styles = styles
exports.images = images
exports.serve = serve
exports.watch = watch
exports.build = build
exports.dev = dev
exports.default = build