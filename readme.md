#Configuring A Project to use Grunt

To add dependencies to a project the easiest way is to use the npm command followed by the --save-dev flag. 

```markdown js npm install <module> --save-dev

```markdown npm install grunt-contrib-coffee --save-dev

####Registering Tasks 
Once the plugin is installed it must be registered with grunt as a task. 

```markdown grunt.loadNpmTasks('grunt-contrib-coffee');

