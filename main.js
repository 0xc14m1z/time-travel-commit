#!/usr/bin/env node

const yargs = require("yargs")
const Options = require("./options")
const Date = require("./date")
const commit = require("./commit")

const argv = Options.parse(yargs).argv

const { date, time, days, message } = argv
commit(
  Date.compute(date, time, days),
  message
)
