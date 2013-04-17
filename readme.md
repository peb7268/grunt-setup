#Configuring A Project to use Grunt

To add dependencies to a project the easiest way is to use the npm command followed by the --save-dev flag. 

```js npm install <module> --save-dev

```js npm install grunt-contrib-coffee --save-dev

####Registering Tasks 
Once the plugin is installed it must be registered with grunt as a task. 

```js grunt.loadNpmTasks('grunt-contrib-coffee');

