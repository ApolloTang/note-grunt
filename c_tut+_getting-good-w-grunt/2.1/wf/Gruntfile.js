module.exports = function(grunt) {
    grunt.initConfig({
        // https://github.com/gruntjs/grunt-contrib-uglify
        uglify: { // <-- short name for contrib plugin
            options: {
                mangle: true,
                compress: true,
                sourceMap: true,
                sourceMapName: 'dist/app.map',
                banner: "/* Apollo Tang 2015 */\n"
            },
            target_1: {
                files: {
                    "dist/app.min.js": ["src/app_1.js", "src/app_2.js"]
                }
            },
            target_2: {
                files: {
                    "dist/util.min.js": ["src/util.js"]
                }
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
                    // eqeqeq: true,
                    // curly: true,
                    // undef: true,
                    // unused: false,
                    // "globals": {
                    //     "module" : true,
                    //     "console": true
                    //         // so it won't complain about console.log
                    //         // http://stackoverflow.com/questions/16336556/grunt-contrib-jshint-dont-complain-about-console-log
                    // }
            },
            target: {
                src: "src/*.js"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
