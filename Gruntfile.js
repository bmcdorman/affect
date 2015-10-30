module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/js/*.js',
        dest: 'build/minjs/client.min.js'
      }
    },
    typescript: {
      base: {
        src: ['public/ts/*.ts'],
        dest: 'build/js',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'ts',
          sourceMap: true,
          declaration: true
        } 
      },
      index: {
        src: ['index.ts'],
        dest: 'build',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'ts',
          sourceMap: true,
          declaration: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'typescript:index', 'uglify']);
};
