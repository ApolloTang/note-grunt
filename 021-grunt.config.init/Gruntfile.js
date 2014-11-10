module.exports = function(grunt){
    grunt.config.init({
          group1 : {
            opt1: {
                  A1 : 'a1'
                , A2 : 'a2'
            }
            , opt2: {
                  B1 : 'b1'
                , B2 : 'b2'
            }
        }
        , group2 : {
            opt3: {
                  C1 : 'c1'
                , C2 : 'c2'
            }
        }
    });
    grunt.registerTask(
        'task1'
        , 'checking out config init'
        , function(){
            // [1] After required 'group1' the object literal 'group1'
            //      defined in grunt.confg.init is now avalible as g1 [2] via
            //      grunt.config.get('group1').
            grunt.config.requires('group1');      // [1]
            var g1 = grunt.config.get('group1');  // [2]
            var enu_g1 = Object.keys(g1);
            grunt.log.writeln(g1);         // [object Object]
            grunt.log.writeln(enu_g1);     // opt1, opt2
    });
    // to run type "grunt task1" in cli

    grunt.registerTask(
        'task2'
        , 'requiring object in config init with dot notation'
        , function(){
            // you don't need to use grunt.config.requires()
            var C2 = grunt.config.get('group2.opt3.C2');
            grunt.log.writeln(C2)          // c1
        }
    )
}
