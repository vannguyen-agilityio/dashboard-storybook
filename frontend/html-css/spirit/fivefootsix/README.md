# Fivefootsix

## Installation

1. Install `Virtualbox` and `Vagrant`
2. `vagrant up` & `vagrant ssh`
3. `cd /src/fivefootsix`
4. `npm install`
5. Grunt dev build: `grunt serve`

## Code Structure

### Website (`app` directory)

1. `/fonts`: directory where we keep the font files

2. `/images`: directory where we keep the image files

3. `/scripts`: directory where we keep the javascript (.js) files
  3.1. `/main.js`: file where we keep the development javascript files

4. `/sass`: directory where we keep the stylesheet (.scss) files


## Tech Stack

### Infrastructure

**Vagrant**

* Create and configure lightweight, reproducible, and portable development environments.
* [Homepage](http://www.vagrantup.com/)

**VirtualBox**

* VirtualBox is a powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use.
* [Homepage](https://www.virtualbox.org/)


### Frontend Frameworks

**Sass**

* Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [Homepage](http://sass-lang.com/)


**jQuery**

* jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
* [Homepage](http://jquery.com/)

**Bourbon**

* Bourbon is a library of pure Sass mixins that are designed to be simple and easy to use. No configuration required. The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible.
* [Homepage](http://bourbon.io)

**Neat**

* Neat is a fluid grid framework built with [Bourbon](https://github.com/thoughtbot/bourbon) with the aim of being easy enough to use out of the box and flexible enough to customize down the road.
* [Homepage](http://neat.bourbon.io)

**Bitters**

* Bitters helps designers start projects faster by defining a basic set of Sass variables, default element style and project structure. It’s been specifically designed for use within web applications. Bitters should live in your project’s root Sass directory and we *encourage* you to modify and extend it to meet your design and brand requirements.
* [Homepage](http://bitters.bourbon.io)

### Frontend Build Tools

**Grunt**

* The JavaScript Task Runner.
* [Homepage](http://gruntjs.com/)

**Bower**

* A package manager for the web.
* [Homepage](http://bower.io/)

**Compass**

* Compass is an open-source CSS Authoring Framework.
* [Homepage](http://compass-style.org/)


**Assemble**

* The static site generator for Node.js, Grunt.js and Yeoman.
* [Homepage](http://assemble.io/)
