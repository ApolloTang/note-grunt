module.exports = function(grunt){

    grunt.registerTask('default', function(){
        grunt.log.writeln('hello');
    });
    // the above task run when you type in cli: grunt

    grunt.registerTask('custom', function(arg){
        grunt.log.writeln(arg);
    });
    // the above task run when you type in cli: grunt custom:<arg>

    grunt.registerTask('addNum', function(a, b){
        if ( isNaN( Number(a) ) || isNaN( Number(b) ) ) {
            grunt.warn("[!] operand(s) must be number    ...");
        };
        grunt.log.writeln(a + '+' + b + '=' + ( Number(a)+Number(b) ) );
    });
    // the above task run when you type in cli: grunt:addNum:<num1>:<num2>
    // give warning if either <num1> or <num2> are not number.
    // to force the script use "--force"
    //      addNum:1:a --force
    // use grunt.fatal() in place of grunt.warn() if want to override
    //  "--force"


    grunt.registerTask('runAll', ['default', 'custom:goodbye', 'addNum:1:3']);
    // when you type runAll at CLI, all task will be execute serially'

    grunt.registerTask(
            'task_c'
            , 'a discription about task_c' // <-- this second arg is optional
            , function(){
                grunt.log.writeln('if you type --help the discription will show itself')}
            )

}
