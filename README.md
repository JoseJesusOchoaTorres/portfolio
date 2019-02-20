<h1 align="center"> Another portfolio </h1> <br>
<p align="center">
  <a href="https://josejesusochoatorres.github.io/portfolio/">
    <img alt="Portfolio screencapture" title="Portfolio screencapture" src="https://raw.githubusercontent.com/JoseJesusOchoaTorres/Files/master/readme-image.png">
  </a>
</p>

<p align="center">
  Simple portfolio placeholder
</p>


## Table of Contents

- [Introduction](#introduction)
- [Sections](#sections)
- [Build with](#build-with)
- [Setup](#setup)
- [Use](#use)
- [Feedback](#feedback)
- [Contact](#contact)
- [License](#license)

---

## Introduction

[![Current Version](https://img.shields.io/badge/version-0.0.9-green.svg)](https://github.com/JoseJesusOchoaTorres/portfolio) 
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://josejesusochoatorres.github.io/portfolio/)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-green.svg?style=flat-square)](./CONTRIBUTORS.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](https://github.com/JoseJesusOchoaTorres/portfolio/pulls)

This simple and responsive portfolio was developed with the alpha version of *[Another CSS framework](#)* with two main purposes:

1. Test *Another CSS framework* in a real but simple project
2. Build something to help you show the world a little bit of yourself 


## Sections

This is just a portfolio placeholder with some default sections so the only limit is your imagination; play with this and build something unique and special.

The default sections are the next: 

* Leadspace
* About me *(Your personal and contact information)*
* Skills and knowledge
* My resume *(Places where you worked and your experience)*
* Contact


## Build with

#### Framework

* [Another CSS framework](#) - The CSS Framework used (grid system, helper classes, etc)


#### Languages

* CSS3
* ES6


#### Dependencies

* [Babel](https://babeljs.io/)
* [Gulp](https://gulpjs.com/)
* [Browsersync](https://browsersync.io)
* [Gulp autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [Gulp concat css](https://www.npmjs.com/package/gulp-concat-css)
* [Gulp csso](https://www.npmjs.com/package/gulp-csso)
* [Gulp htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
* [Gulp uglify](https://www.npmjs.com/package/gulp-uglify)


## Setup

Clone this repository to your desktop and after you clone it, go to its root directory and run `npm install` to install its dependencies only if you will work with a production version, if you will work just with development files is not necessary install dependencies.

### Gulp task

I've created 5 task:

`gulp styles`

- Concatenate all CSS files in just one
- Autoprefixer
- Remove redundancies
- Compression
- Restructuration
- Create only a *style.css* file
- Move this file to `dist/css/`

`gulp scripts`

- Use Babel to transpile from ES6 to ES5
- Minify the js files with uglify
- Move this file to `dist/js/`

`gulp pages`

- Remove the white spaces in html files
- Remove comments
- Move this file to `dist/`

`gulp clean`

- Remove all files inside of `dist`
- Remove all files inside of `dist/css/`
- Remove all files inside of `dist/js/`

`gulp`

- Run all the tasks


## Use

I'm using [Browsersync](https://browsersync.io) to mount a local server and test my project on mobile and desktop.

You can add this dependency directly in the project, or install it globally in your operative system.

**Global:** `npm install -g browser-sync`

To run our server I have added a script in our *package.json* so you can run this in our project root path:

`npm run serve`


## Feedback

Feel free to send me feedback on my social networks or [file an issue](https://github.com/JoseJesusOchoaTorres/portfolio/issues/new). Feature requests are always welcome. If you wish to contribute, please take a quick look at the [guidelines](./CONTRIBUTING.md)!


## Contact

If there's anything you'd like to chat about, please feel free to do it.

* [jose.jesus.ochoa.torres@gmail.com](mailto:jose.jesus.ochoa.torres@gmail.com)
* [Instagram](https://www.instagram.com/)
* [Facebook](https://www.facebook.com/jose.jesus.ochoa.torres)
* [Linkedin](https://www.linkedin.com/in/octojose/)
* [Twitter](https://twitter.com/jjot93)


## License

This project is licensed under the terms of the [MIT license](./LICENSE.md).