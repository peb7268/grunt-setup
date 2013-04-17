#Configuring A Project to use Grunt
A grunt project must have 2 things: a Gruntfile.js file and a package.json file.
package.json tracks the dependencies via NPM. Once everything is in there that you want to start with you can do: 

```markdown 
sudo npm install 
```
To install the packages.

To add dependencies to a project the easiest way is to use the npm install <module> command followed by the --save-dev flag. 

```markdown 
npm install <module> --save-dev
``` 

```markdown 
npm install grunt-contrib-coffee --save-dev
```

####Registering Tasks 
Once the plugin is installed it must be registered with grunt as a task. 

```markdown 
grunt.loadNpmTasks('grunt-contrib-coffee');
```

