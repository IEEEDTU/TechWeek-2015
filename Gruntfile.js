module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'prod/js/TechWeekScripts.js': ['js/custom.js']
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'prod/css/TechWeekStyles.css': ['css/main.css']
				}
			}
		},
    processhtml: {
      dist: {
        files: {
          'prod/index.html': ['index.html']
        }
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml']);

};