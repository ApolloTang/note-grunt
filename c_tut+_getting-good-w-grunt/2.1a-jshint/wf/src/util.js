module.exports = function(grunt) {
    // some sili function
    grunt.initConfig({
        // https://github.com/gruntjs/grunt-contrib-uglify
        uglify: { // <-- short name for contrib plugin
            options: {
                mangle: true,
                compress: true,
                sourceMap: true,
                sourceMapName: 'dist/app.map',
                banner: '/* Apollo Tang 2015 */\n'
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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
