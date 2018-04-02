#!/usr/bin/env node

const yargs = require("yargs")
const Options = require("./ttcommit/options")
const Date = require("./ttcommit/date")
const commit = require("./ttcommit/commit")

const { date, time, days, message } = Options.parse(yargs).argv

commit(
  Date.compute(date, time, days),
  message
)
