Node Quickstart
===============

[![Build Status][status-image]][travis]
[![Test Coverage][cover-image]][coverage]

Tutorial for a new project
--------------------------

```bash session
$ mkdir path/to/your/new/project
$ cd path/to/your/new/project
$ git clone git@github.com:mlibrary/node-quickstart .
$ ./configure
```

When running `./configure`, you'll be asked a series of questions. You
should be ready with:

1.  A project name (e.g. if you pick `hello`, your project will live at
    `mlibrary/hello`)
2.  A brief project description
3.  Your own name

It will:

-   check that you have npm installed,
-   check that you have a working test environment,
-   overwrite package.json and README.md,
-   set the correct git origin url,
-   delete itself, and
-   if everything worked, run `git commit`

Tutorial for an existing project
--------------------------------

### By hand ###

One method is to simply look at the files in this repository and copy
them as-they-are into your own.

These four files can be copied without making changes:
-   .eslint.json
-   .travis.yml
-   COPYRIGHT.txt
-   LICENSE.txt

These five files can be ignored:
-   configure
-   README.md
-   index.js
-   lib/nothing.js
-   spec/nothing.spec.js

Make sure this line is in your `.gitignore`:

```text
node_modules/
```

Lastly, I recommend you generate `package.json` by running

```bash session
$ npm init
```

and answering its prompts (if you haven't already). You can install dev
dependencies with the following:

```bash session
$ npm install --save-dev chai coveralls eslint istanbul mocha eslint-{plugin-{import,node,promise,standard},config-standard}
```

### Or you can do it using `./configure` ###

1.  Follow the instructions for a new project in a new folder.
2.  Copy the resulting files into your old project.
3.  Delete the project you created in step 1.

[travis]:       https://travis-ci.org/mlibrary/node-quickstart
[status-image]: https://travis-ci.org/mlibrary/node-quickstart.svg?branch=master
[coverage]:     https://coveralls.io/github/mlibrary/node-quickstart
[cover-image]:  https://coveralls.io/repos/github/mlibrary/node-quickstart/badge.svg?branch=master
