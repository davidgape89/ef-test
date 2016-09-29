# Introduction

This project has been developed for an interviewing process. It is based on the boilerplate 
[Seed2](https://github.com/mgechev/angular2-seed) and it has been developed entirely with Angular 2.

# Table of Content

- [Introduction](#introduction)
- [How to run the project](#how-to-run-the-project)
- [Running tests](#running-tests)
- [Directory Structure](#directory-structure)

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


# Directory Structure

```
.
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── dashboard
|       |   |   ├── gauge
|       |   |   |   ├── gauge.component.css
|       |   |   |   ├── gauge.component.html
|       |   |   |   ├── gauge.component.ts
|       |   |   |   ├── gauge.component.spec.ts
|       |   |   |   └── index.ts
|       |   |   ├── switch
|       |   |   |   ├── switch.component.css
|       |   |   |   ├── switch.component.html
|       |   |   |   ├── switch.component.ts
|       |   |   |   ├── switch.component.spec.ts
|       |   |   |   └── index.ts
│       │   │   ├── dashboard.component.css
│       │   │   ├── dashboard.component.html
│       │   │   ├── dashboard.component.spec.ts
│       │   │   ├── dashboard.component.ts
│       │   │   ├── dashboard.module.ts
│       │   │   ├── dashboard.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── hot_loader_main.ts
│       │   ├── main.ts
│       │   └── shared
│       │       ├── config
│       │       │   └── env.config.ts
│       │       ├── index.ts
│       │       ├── shared.module.ts
│       │       ├── models
│       │       │   ├── index.ts
│       │       │   ├── ControlDTO.ts
│       │       │   ├── ResponseMessageDTO.ts
│       │       │   ├── StatusDTO.ts
│       │       │   └── TelemetryDTO.ts
│       │       └── services
│       │           ├── index.ts
│       │           ├── dashboard.service.ts
│       │           ├── dashboard.service.spec.ts
│       │           ├── websocket.service.ts
│       │           └── websocket.service.spec.ts
│       ├── assets
│       │   ├── data.json
│       │   ├── images
│       │   |   ├── bg.png
│       │   |   ├── COMP.png
│       │   |   ├── connection-connecting.png
│       │   |   ├── connection-offline.png
│       │   |   ├── connection-online.png
│       │   |   ├── flaps-switch.png
│       │   |   ├── landing-gear-off.png
│       │   |   ├── landing-gear-on.png
│       │   |   ├── needle-big.png
│       │   |   └── needle-small.svg
│       │   └── svg
│       │       └── more.svg
│       ├── css
│       │   └── main.css
│       ├── index.html
│       ├── testing
│       │   └── router
│       │       ├── mock-location-strategy.ts
│       │       └── router-testing-providers.ts
│       ├── tsconfig.json
│       └── typings.d.ts
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.coverage.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
└── appveyor.yml
```
