'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const del = require('del');
const exec = require('child_process').exec;
const runSequence = require ('run-sequence');
//브라우저싱크 클라이언트 자동리로드
const browserSync = require('browser-sync');

const files = {

  sass: 'src/sass/**/*.sass',
  js: 'src/**/*.js',
  dist: 'dist/**/*.js'
};

gulp.task('sass', () => gulp.src(files.sass)
  .pipe(sass ())
  .pipe(gulp.dest ('dist/css'))
);

gulp.task('webpack',(cb) => {
  gulp.src('src/app-client.js')
  .pipe (webpack ({
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      }]
    }
  }))
  .pipe (gulp.dest ('dist/js'));
  cb();
});


gulp.task('clean', () => del ([ 'babel_cache' ]));
gulp.task('build', [ 'sass', 'webpack' ]);
/*
gulp.task ('end', (cb) => {
  console.log('Kill Server if up....');
  exec ('npm run stop-server',
  (err, stdout, stderr) => {
    console.log (stdout);
    console.log (stderr);
    cb (err);
  }
);
});
*/
gulp.task('browser-sync', () => {
  browserSync.init(null,{
    proxy: "http://localhost:3000",
    files: ["dist/**/*.js"],
    port:7000
  })
});


gulp.task ('start', (cb) => {
  console.log ('Start server with babel-node. port3000');
  exec('npm run start-server',
  (err, stdout, stderr) => {
    console.log (stdout);
    console.log (stderr);
    cb(err);
  }
);
});

gulp.task('watch', () => {
  gulp.watch(files.sass, [ 'sass' ]);
  gulp.watch(files.js, () => runSequence ('webpack','browser-sync' ,'start'));
  //인자 맨앞에 'end' 일단 뻈음 추후 추가 예정
});
