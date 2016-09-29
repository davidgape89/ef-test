# Introduction

This project has been developed for an interviewing process. It is based on the boilerplate 
[Seed2](https://github.com/mgechev/angular2-seed) and it has been developed entirely with Angular 2.

# Table of Content

- [Introduction](#introduction)
- [How to run the project](#how-to-run-the-project)
- [Running tests](#running-tests)

# How to run the project

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.

In order to run the project use:


```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# dev run
npm run serve.dev
```

_Does not rely on any global dependencies._

# Running tests

```bash
npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage