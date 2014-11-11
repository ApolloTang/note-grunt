module.exports = function(grunt){

    // With matchdep, we dont have to write
    //      grunt.loadNpmTasks("grunt-task-name");
    // for each dependency,
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('default', []);

};
