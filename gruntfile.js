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
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*{jpg,gif,png}'],
          cwd: 'assets/',
          dest: 'images/'
        }]
      }
    },
    juice: {
      your_target: {
        options: {
          preserveMediaQueries: true,
          applyAttributesTableElements: true,
          applyWidthAttributes: true,
          preserveImportant: true,
          webResources: {
            images: false
          }
        },
        files: [{
          expand: true,
          src: '*.html',
          dest: 'dist/'
        }]
      },
    },
    replace: {
      options: {
        usePrefix: false,
        patterns: [
          {
            match: /images\//gi,  // Matches <img * src="images/ or <img * src='images/
            replacement: 'https://one-eteam.github.io/new-model-landing-pages/images/'
          },
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['*.html'],
          dest: 'dist/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-juice');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('images', ['copy', 'responsive_images']);
  grunt.registerTask('prep', ['juice', 'replace']);
};
