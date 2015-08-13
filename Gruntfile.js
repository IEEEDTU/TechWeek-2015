module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'prod/TechWeek-2015/js/TechWeekScripts.js': ['js/custom.js']
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'prod/TechWeek-2015/css/TechWeekStyles.css': ['css/main.css']
				}
			}
		},
    processhtml: {
      dist: {
        files: {
          'prod/TechWeek-2015/index.html': ['index.html']
        }
      }
    },
		copy: {
			main: {
				files: [
					{expand:true, src: ['css/imgs/**/*'], dest:'prod/TechWeek-2015/'},
					{expand:true, src: ['feedback_form/**/*'], dest:'prod/TechWeek-2015/'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml', 'copy']);

};