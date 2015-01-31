<p align="center">
  <a href="http://robertpataki.com">
    <img width="281" height="359" src="https://raw.githubusercontent.com/robertpataki/generator-sizzle-jekyll/master/app/templates/app/images/yeoman-sizzle-jekyll.png"/>
  </a>
</p>

# generator-sizzle-jekyll [![Build Status](https://travis-ci.org/robertpataki/generator-sizzle-jekyll.svg?branch=master)](https://travis-ci.org/robertpataki/generator-sizzle-jekyll) [![npm version](https://badge.fury.io/js/generator-sizzle-jekyll.svg)](http://badge.fury.io/js/generator-sizzle-jekyll)

> Yeoman Generator using Jekyll, Compass, RequireJS (with Almond), Normalize, Bourbon and Neat, jQuery, Greensock, underscore.js, and JSSignals to help you quickly scaffold a static blog.

## Installing Compass and Jekyll

1. Make sure you have [Ruby installed](https://www.ruby-lang.org/en/downloads/). Perhaps a better way of installing ruby is via [rbenv](http://octopress.org/docs/setup/rbenv/)
2. Install [Bundler](http://bundler.io/) if you haven't already
3. In your project root run:

  $ bundle install

## Usage

Install `generator-sizzle-jekyll`:
```
npm install -g generator-sizzle-jekyll
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo sizzle-jekyll`, optionally passing an app name:
```
yo sizzle-jekyll [app-name]
```

### Running your project locally

Run `grunt` for building and `grunt serve` for preview

### Creating a new blogpost
```
$ grunt post --name "My new Blog post yay"
```
### Deploying your blog

The simplest way of deploying your blog is to use Github Pages. Simply
create a new branch called `gh-pages`, copy the contents of your pre-built `dist` folder from `master` branch, commit your changes and push them to remote.

## Changelog

All changes are logged in the [CHANGELOG.md](https://github.com/robertpataki/generator-sizzle-jekyll/blob/master/CHANGELOG.md) file.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)