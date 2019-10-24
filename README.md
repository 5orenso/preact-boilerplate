# Preact Boilerplate
[![Build Status](https://travis-ci.org/5orenso/preact-boilerplate.svg?branch=master)](https://travis-ci.org/5orenso/preact-boilerplate)
[![GitHub version](https://badge.fury.io/gh/5orenso%2Fpreact-boilerplate.svg)](https://badge.fury.io/gh/5orenso%2Fpreact-boilerplate)

## Yet another Preact Boilerplate

This time with a Bootstrap 4, Fontawesome, unit tests, integration tests, continuous integration, code analysis, code style and a nice setup flow.

Helper modules in use:

__Bootstrap 4__

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system and extensive prebuilt components.

__Fontawesome 5.8.1__

__Professionally Designed + Pixel-Perfect__
Each and every symbol is designed from scratch against guidelines and standards forged from years of experience of illustrating and designing icons. The result is a consistent look and feel that spans thousands of icons across three unique styles.

__Jest__
A browser JavaScript testing toolkit. Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience.

__ESLint__
ESLint is a code style linter for programmatically enforcing your style guide.

__Istanbul__
A Javascript code coverage tool written in JS.

__Travis__
Travis CI is a hosted continuous integration service. It is integrated with GitHub and offers first class support for many languages.

__Retire__
Scanner detecting the use of JavaScript libraries with known vulnerabilities.


## Before you start

Install preact-cli from this repo:
https://github.com/developit/preact-cli

```bash
$ npm install -g preact-cli
```

## Getting started

1. Create your new widget repo or just create your folder.
2. Copy the files you need from this repo: 
```bash
$ npm run install-widget -- --dir <my-new-widget-dir>
```
3. Then jump into your new widget dir:
```bash
$ cd <my-new-widget-dir>
```
4. Install dependencies
```bash
$ npm install
```
5. Run the widget in dev mode:
```bash
$ npm run start
// You can see your live widget here `http://localhost:56789/`
```

Now you are ready to start developing your groundbreaking new widget.

A nice thing to have running while you are developing are ESlint:
```bash
$ npm run eslint-watch
```

And if you are an ACE-programmer you also have unit test running live:
```bash
$ npm run test-watch
```

-----

# General Preact stuff

## Create a new widget

```bash
// Create preact boilerplate
$ preact create widget boilerplate
$ cd boilerplate/
$ npm install
```


## Development

When you are running in dev mode you can see your application here:
http://localhost:8080

```bash
# To start a development live-reload server:
$ npm run start
```


## Build a release

```bash
# To create a production build (in ./build):
$ npm run build
```


## Production server

```bash
# To start a production HTTP/2 server:
$ npm run serve
```


### Howto upgrade modules
```bash
$ sudo npm install -g npm-check-updates
$ ncu -u -a
$ npm install --no-optional
```

### Versioning
For transparency and insight into the release cycle, releases will be
numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.


## Contributions and feedback:

We ❤️ contributions and feedback.

If you want to contribute, please check out the [CONTRIBUTING.md](CONTRIBUTING.md) file.

If you have any question or suggestion create an issue.

Bug reports should always be done with a new issue.
