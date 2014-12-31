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
                , Cl : 'c2'
            }
        }
    });
    grunt.registerTask(
        'task1'
        , 'checking out config init'
        , function(){
            grunt.config.requires('group2');
            var g2 = grunt.config.get('group2')
            var enu_g2 = Object.keys(g2);
            grunt.log.writeln(g2);
            grunt.log.writeln(enu_g2);
        });
}

