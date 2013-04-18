#Configuring A Project to use Grunt
A grunt project must have 2 things: a Gruntfile.js file and a package.json file.
package.json tracks the dependencies via NPM. 

####Installing Plugins
Plugins cant be found by going to gruntjs.com/plugins. 
The officially maintained plugins are prefixed with *contrib*. 

To add dependencies to a project the easiest way is to use the npm install <module> command followed by the --save-dev flag. 

```markdown 
npm install <module> --save-dev
``` 

```markdown 
npm install grunt-contrib-coffee --save-dev
```

Once everything is in there that you want to start with you can do: 

```markdown 
sudo npm install 
```

This command will install all the dependencies listed in the packages.json file.

####Registering Tasks 
Once the plugin is installed it must be registered with grunt as a task before you can call it via the command line or as a custom task in grunt. 

```markdown 
grunt.loadNpmTasks('grunt-contrib-coffee');
```

####Running Grunt 
You can run grunt by typing ``` grunt ``` at the command line. This will run the 'default' task. If you want to run a specific task the you have pre-registered then you can do ``` grunt taskname ```. An example of this would be ``` grunt coffee ```.
