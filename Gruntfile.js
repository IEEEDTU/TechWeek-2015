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
		copy: {
			main: {
				files: [
					{expand:true, src: ['css/imgs/**/*'], dest:'prod/TechWeek-2015/'},
					{expand:true, src: ['feedback_form/**/*'], dest:'prod/TechWeek-2015/'},
					{expand:true, src: ['js/ga.js'], dest:'prod/TechWeek-2015/'}
				]
			}
		},
		includeSource: {
			options: {
				basePath: './'
			},
			myTarget: {
				files: {
					'prod/TechWeek-2015/index.html': 'index.html'
				}
			}
		},
		processhtml: {
			dist: {
				files: {
					'prod/TechWeek-2015/index.html': ['prod/TechWeek-2015/index.html']
				}
			}
		},
		prettify: {
			options: {
				indent: 4
			},
			files: {
				'prod/TechWeek-2015/index.html': ['prod/TechWeek-2015/index.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-include-source');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-prettify');

	grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'includeSource', 'processhtml', 'prettify']);

};