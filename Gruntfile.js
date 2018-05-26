module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/style.css' : 'assets/scss/style.scss',
          'assets/css/mobile.css' : 'assets/scss/mobile.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['watch'])
  require('load-grunt-tasks')(grunt)
}