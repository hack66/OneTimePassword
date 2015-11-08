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
          {src: ['bower_components/gaia-fonts/**', '!**/bower.json'], dest: 'src/'},
          {src: ['bower_components/gaia-header/gaia-header.js'], dest: 'src/'},
          {src: ['bower_components/gaia-layout/style.css'], dest:'src/'},
          {src: ['bower_components/gaia-component/gaia-component.js'], dest:'src/'},
          {expand: true, cwd: 'bower_components/gaia-icons/', src: ['gaia-icons.js', 'gaia-icons.css'], dest: 'src/bower_components/gaia-icons/'},
          {src: ['bower_components/base/base.css'], dest:'src/'},
          {src: ['bower_components/gaia-theme/**', '!**/bower.json'], dest: 'src/'}
        ]
      }
    }
  });

  // Load the plugins that provide the "uglify" and "copy" task.s
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy:dev', 'copy:main', 'uglify']);
  grunt.registerTask('dev', ['copy:dev']);

};
