module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/index.js',
        dest: 'build/index.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'},
          {src: ['manifest.webapp'], dest: 'build/'}
        ]
      },
      dev: {
        files: [
          {expand: true, cwd: 'bower_components', src: ['**', '!**/bower.json'], dest: 'src/bower/'}
        ]
      }
    }
  });

  // Load the plugins that provide the "uglify" and "copy" task.s
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'uglify']);
  grunt.registerTask('dev', ['copy:dev']);

};
