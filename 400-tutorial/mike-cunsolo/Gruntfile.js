module.exports = function(grunt){

    // With matchdep, we dont have to write
    //      grunt.loadNpmTasks("grunt-task-name");
    // for each dependency,
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        // -- html -- //

            htmlhint: {  // <--- plugin's name without the "grunt-contribe-" prefix
                build: {  // <--- target ?
                    options: {
                        'tag-pair': true,                 // Force tags to have a closing pair
                        'tagname-lowercase': true,        // Force tags to be lowercase
                        'attr-lowercase': true,           // Force attribute names to be lowercase e.g. <div id="header"> is invalid
                        'attr-value-double-quotes': true, // Force attributes to have double quotes rather than single
                        'doctype-first': true,            // Force the DOCTYPE declaration to come first in the document
                        'spec-char-escape': true,         // Force special characters to be escaped
                        'id-unique': true,                // Prevent using the same ID multiple times in a document
                        'head-script-disabled': true,     // Prevent script tags being loaded in the  for performance reasons
                        'style-disabled': true            // Prevent style tags. CSS should be loaded through
                    },
                    src: ['index.html']
                }
            }, // End :: htmlhint
            // to run the above type : grunt htmlhint

        // -- Javascript -- //

            uglify: {
                build: {
                    files: {
                        'build/js/base.min.js': ['assets/js/base.js']
                    }
                }
            },

        // -- CSS -- //

            sass: {
                build: {
                    files: {
                        'build/css/master.css': 'assets/sass/master.scss'
                    }
                }
            },

            cssc: {
                build: {
                    options: {
                        consolidateViaDeclarations: true,
                        consolidateViaSelectors:    true,
                        consolidateMediaQueries:    true
                    },
                    files: {
                        'build/css/master.css': 'build/css/master.css'
                    }
                }
            },

            cssmin: {
                build: {
                    src: 'build/css/master.css',
                    dest: 'build/css/master.css'
                }
            },



        // -- watch -- //
            watch: {
                html: {
                    files: ['index.html'],
                    tasks: ['htmlhint']
                },
                js: {
                    files: ['assets/js/base.js'],
                    tasks: ['uglify']
                },
                css: {
                    files: ['assets/sass/**/*.scss'],
                    tasks: ['buildcss']
                }

            } // End :: watch
            // to run the above type : grunt watch


    }); // End :: grunt.initConfig

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};
