'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SizzleGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to Sizzle Generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'Would you mind telling me your project base name?',
      default: this.appname
    }, {
      name: 'sublimeProjectFile',
      message: 'Would you like me to create a Project File for Sublime?',
      type: 'confirm',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      this.sublimeProjectFile = props.sublimeProjectFile;

      done();
    }.bind(this));
  },

  writing: {

    projectfiles: function () {
      this.template('_package.json', 'package.json');
      this.template('_config.json', 'config.json');
      this.template('editorconfig', '.editorconfig');
      this.template('_bower.json', 'bower.json');
      this.template('_config.yml', '_config.yml');
      this.template('_config.build.yml', '_config.build.yml');

      // Optional goodies
      if(this.sublimeProjectFile) {
        this.template('_subl.sublime-project', this.appName.toLowerCase().split(' ').join('-') + '.sublime-project');
      }
    },

    gitfiles: function() {
      this.src.copy('gitignore', '.gitignore');
    },

    gruntfile: function() {
      this.src.copy('Gruntfile.js', 'Gruntfile.js');
    },

    ruby_gems: function() {
      this.src.copy('Gemfile', 'Gemfile');
    },

    app: function () {
      // Copy over the entire app folder
      this.bulkDirectory('app', 'app');
    },

  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = SizzleGenerator;