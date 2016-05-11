module.exports = function (grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: 'assets/',
          dest: 'images/'
          }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', 'responsive_images');
};
