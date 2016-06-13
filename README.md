# Code Style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This configuration is based on the [JavaScript Standard Style](http://standardjs.com/).

Please have a look at the [rules](http://standardjs.com/rules.html) for detailed information on the Standard Style rules.

Maybe the "no semicolons" rule jumps out the most, but the code looks really much more clean without them and one gets used to it very quickly.

See also the [Additional Rules](#additional-rules) below.

## Usage

Add this package to the devDependencies of your package.json. Choose the version you want to use (e.g. v1.0.0).

```
npm install --save-dev eversport/eslint-config-eversports#v1.0.0
```

Then create a `.eslintrc.json` file with the following content:
```
{
  "extends": "eversports"
}
```

Now you can check if your project fulfills the defined rules:
```
eslint --ignore-path .gitignore .
```

Add this command as a script to your package.json and use the pre-commit package to add a git pre commit hook to your package.json.

## Additional Rules

#### Require `let` or `const` instead of `var`

[Examples](http://eslint.org/docs/rules/no-var)

#### Prefer `const`

Use `let` only for variables which should be explicitly reassigned.

[Examples](http://eslint.org/docs/rules/prefer-const)

#### Maximum line length of 160 character

Do not write code lines that exceed 160 characters (which is very generous anyways).

Trailing comments or urls may exceed this limit.

[Examples](http://eslint.org/docs/rules/max-len)

#### Newline per chained call for chains deeper than three calls

[Examples](http://eslint.org/docs/rules/newline-per-chained-call)

#### Explicit return for multiline arrow functions

(no ESLint rule available yet)

Arrow functions allow two different forms:

```
param => expression
```

In this case, the value of the expression is returned implicitly.

```
param => {
  statements
}
```

For arrow functions with a block body, you need an explicit `return` statement.

Please avoid multiline arrow functions without a block body.

Examples:

```
// ✓ ok
promise.then(result => result.x)
```

```
// ✗ avoid
promise.then(result =>
  complexMethodCall(
    param1,
    somethingMoreComplex,
    result))
```

```
// ✓ ok
promise.then(result => {
  const param2 = somethingMoreComplex
  return complexMethodCall(
    param1,
    param2,
    result)
})
```

#### Prefer arrow functions over anonymous functions

(no ESLint rule available yet)

Arrow functions do not bind the `this` variable so you can use the `this` variable of the upper scope.
You should always prefer arrow functions over anonymous functions except for cases where you explicitly need
the bound `this` variable.
