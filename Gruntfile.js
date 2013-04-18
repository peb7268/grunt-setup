'use strict';
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: '**/*/*.coffee',
        tasks: ['default'],
        options: {
          interrupt: false,
          nospawn: true
        }
      }
    },
    //Syntax checking
    jshint: {
      all: ['Gruntfile.js', 'js/**/*/*.js'],
      options: {
        jshintrc: '.jshintrc',
        verbose: true,
        force: true
      }
    },
    //Preprocessor Configs
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "./index.html": ["src/*.jade"]
        }
      }
    },
    sass: {
      compile: {
        files: {
          './styles/css/styles.css': './styles/sass/styles.scss'
        }
      }
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: './',
        src: ['js/coffee/*.coffee'],
        dest: 'js/src',
        ext: '.js'
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'sass',
    'nodeunit',
    'clean'
  ]);
  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
  grunt.registerTask('default', ['jade', 'sass', 'coffee', 'jshint', 'watch']);
};