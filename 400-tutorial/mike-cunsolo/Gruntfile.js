module.exports = function(grunt){

    // With matchdep, we dont have to write
    //      grunt.loadNpmTasks("grunt-task-name");
    // for each dependency,
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        htmlhint: {  // <--- plugin's name without the "grunt-contribe-" prefix
            build: {  // <--- target ?
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        }, // End :: htmlhint
        // to run the above type : grunt htmlhint

        uglify: {
            build: {
                files: {
                    'build/js/base.min.js': ['assets/js/base.js']
                }
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                    files: ['assets/js/base.js'],
                    tasks: ['uglify']
                }

        } // End :: watch
        // to run the above type : grunt watch


    }); // End :: grunt.initConfig

    grunt.registerTask('default', []);

};
