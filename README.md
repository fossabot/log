# Beautiful Log

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fphamhongphuc%2Flog.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fphamhongphuc%2Flog?ref=badge_shield) [![Travis Build](https://travis-ci.org/phamhongphuc/log.svg?branch=master)](https://travis-ci.org/phamhongphuc/log/builds "Most recent build") [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/phamhongphuc/log.svg)](https://github.com/phamhongphuc/log/issues "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/phamhongphuc/log.svg)](https://github.com/phamhongphuc/log/issues "Percentage of issues still open")

## Description

This is a module that make you make a beautiful log in your console.
This support json object as the input.

## Install

```sh
npm install phamhongphuc/log
```

## Usage

```javascript
import log from 'log';
import chalk from 'chalk';

log({
    "repository": "phamhongphuc/log",
    "author": "phamhongphuc",
    "version": "0.2.2"
}, {
    title: "The most beautiful log",
    color: chalk.blue,
    length: 20,
    middle: true,
});
```

You will see:

```log
┏ The most beautiful log ━━━━━━━
┃ repository : phamhongphuc/log
┃     author : phamhongphuc
┃    version : 0.2.2
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
