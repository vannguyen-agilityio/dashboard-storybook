# Foodsense

## Installation

### Use vagrant

1. Install `Virtualbox` and `Vagrant`
2. `vagrant up` & `vagrant ssh`
3. `cd /src/foodsense`
4. `sudo npm install --global gulp`
5. `npm install`
6. Grunt dev build: `gulp serve`

### Not use vagrant
1. `cd /vagrant_start`
2. `sh boottrap.sh`
3. `cd /foodsense`
4. `npm install`
5. `bower install`
5. Grunt dev build: `gulp serve`

## Code Structure

### Website (`app` directory)

1. `/fonts`: directory where we keep the font files

2. `/images`: directory where we keep the image files

3. `/scripts`: directory where we keep the javascript (.js) files
  3.1. `/main.js`: file where we keep the development javascript files

4. `/styles`: directory where we keep the stylesheet (.scss) files


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

### Frontend Build Tools

**Grunt**

* The JavaScript Task Runner.
* [Homepage](http://gruntjs.com/)

**Bower**

* A package manager for the web.
* [Homepage](http://bower.io/)