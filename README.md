# time-travel-commit

[![Maintainability](https://api.codeclimate.com/v1/badges/7146a631d59a2bc985d0/maintainability)](https://codeclimate.com/github/0xc14m1z/time-travel-commit/maintainability)

Little script that allows git commits in the past or future, even at specific times.

## how to install

```
$ npm install -g time-travel-commit
```

## how to use it

```
$ ttcommit -h

Usage: ttcommit [options]

Options:
  --version      Show version number                                   [boolean]
  --help, -h     Show help                                             [boolean]
  --message, -m  Commit message                                       [required]
  --date         Set a specific commit date                     [default: TODAY]
  --time, -t     Set a specific commit time                       [default: NOW]
  --days, -d     Shift the commit date by these days                [default: 0]

Examples:

  ttcommit -m "message"
  Commits at the current date and time

  ttcommit --date 2018-01-01 -m "message"
  Commits on the january 1st of 2018, at the current time

  ttcommit --time 12:00:00 -m "message"
  Commits on the current date, at noon

  ttcommit --date 2018-01-01 --time 12:00:00 -m "message"
  Commits on the january 1st of 2018 at noon

  ttcommit --days -1 -m "message"
  Commits on yesterday, at the current time

  ttcommit --days -1 --time 12:00:00 -m "message"
  Commits on yesterday, at noon

  ttcommit --date 2018-01-01 --time 12:00:00 --days 10 -m "message"
  Commits on january 10th of 2018 at noon
```
