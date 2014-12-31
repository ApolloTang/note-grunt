module.exports = function(grunt){
    grunt.config.init({
        copyFiles: {
            opts: {
                  workDir : 'work_folder'
                , deployDir : 'deploy'
                , manifest: ['index.html', 'css/', 'js/']
            }
        }
    });

    grunt.registerTask(
          'create_deploy'
        , 'Create deploy folder'
        , function(){
            var folderToCreate = grunt.config.get('copyFiles.opts.deployDir');
            console.log('creating deploying directory: ', folderToCreate);
            grunt.file.mkdir(folderToCreate);
        }
    );

    grunt.registerTask(
          'clean'
        , 'Delete deploy folder and its contents'
        , function(){
            var folderToRemove = grunt.config.get('copyFiles.opts.deployDir');
            grunt.log.writeln('remove recursively the directory: ', folderToRemove);
            grunt.file.delete(folderToRemove);
        }
    );

    grunt.registerTask(
        'copyFiles'
        , 'copying files to depploy folder'
        , function(){

            var workFolder = grunt.config.get('copyFiles.opts.workDir');
            var deployFolder = grunt.config.get('copyFiles.opts.deployDir');
            var files = grunt.config.get('copyFiles.opts.manifest');
            grunt.log.writeln( workFolder, deployFolder, files);


            var recursiveCopy = function( source, destination, item ) {
                grunt.log.writeln('>> >> recursiveCopy', source, destination, item )
                if (grunt.file.isDir(source)){
                    grunt.file.mkdir(destination);
                    grunt.file.recurse(source, function(abspath, rootdir, subdir, filename ){
                        grunt.log.writeln('>> >> >> recurse' , source, destination, abspath, filename);
                        recursiveCopy(abspath, destination, filename);
                    });
                } else {
                    grunt.log.writeln('check: ', destination, grunt.file.isDir(destination), item);

                    if (  grunt.file.isDir(destination)) {
                        grunt.log.writeln(source , 'source is a dir')
                        destination = destination + "/" + item;
                    }
                    grunt.log.writeln('>> >> >> Copying ' + source + ' to ' + destination );
                    grunt.file.copy(source, destination);
                }
            }

            files.forEach(function(item){
                var destination = deployFolder + "/" + item;
                var source = workFolder + "/" + item;
                grunt.log.writeln('>> in forEach ', destination, source, item)
                recursiveCopy(source, destination, item);
            });
        }
    );
}


/*
$ tree deploy
deploy
├── css
│   └── main.css
├── index.html
└── js
    ├── m1.js        <---- this is wrong
    └── main.js



$ tree deploy
deploy
├── css
│   └── main.css
├── index.html
└── js
    ├── module / m1.js    <---- expecting
    └── main.js


solution to try out..
http://stackoverflow.com/questions/19138329/grunt-recursive-copy
it uses a module
but it would be a learning experience if I can get my own code to work...

*/


