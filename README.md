# JavaScript Coding Challenges

A set of JS coding challenges that are set on https://www.linkedin.com/learning/code-challenges-javascript/ course. Used TDD development in addition to the challenges using Mocha, Chai, NYC and Sinon. The challenges themselves are easy and the reason for picking up that course was to use TDD for each challenge to increase the difficulty.

Most of the test cases run on NodeJS. Test cases that have a prefix of `.test.js` run on the browser using the `index.html` as the entry point that needs to import all JS files before Mocha is initialized.

## Local installation

To run tests locally you can clone this repository.

```bash
$ git clone https://github.com/markoboy/JavaScript-Coding-Challenges.git
```

Once cloned, navigate to the directory via the CLI and run:

```bash
$ npm install
```

You can then run the tests using:

```bash
# One run
$ npm test

# -- OR --

# Watches file updates
$ npm run test:watch
```

In addition, you can view the test coverage by running:

```bash
$ npm run coverage
```

A directory `coverage` will be created on the root of the project where you can open the `index.html` on your browser to view the coverage for each file.
