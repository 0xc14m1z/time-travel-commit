const moment = require("moment")
const DateHelper = require("./date")
const pipe = require("./pipe")

const init = yargs =>
  yargs.detectLocale(false)

const usage = yargs =>
  yargs.usage("Usage: $0 [options]")

const help = yargs =>
  yargs
    .help("help")
    .alias("help", "h")

const examples = yargs =>
  yargs

const options = yargs =>
  yargs.options({
    "message": {
      alias: "m",
      describe: "Commit message",
      demandOption: true
    },
    "date": {
      describe: "Set a specific commit date",
      default: DateHelper.today()
    },
    "time": {
      alias: "t",
      describe: "Set a specific commit time",
      default: DateHelper.now()
    },
    "days": {
      alias: "d",
      describe: "Shift the commit date by these days",
      default: 0
    }
  })

const coercions = yargs =>
  yargs
    .coerce("date", date => {
      const parsedDate = Date.parse(date)
      if ( parsedDate ) return moment(parsedDate)
      throw new Error("This date is invalid, use the YYYY-MM-DD format.")
    })
    .coerce("time", time => {
      const pattern = /([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/
      if ( pattern.test(time) ) return time
      throw new Error("This time is invalid, use the HH:MM:SS format.")
    })
    .coerce("days", days => {
      const parsedDays = parseInt(days, 10)
      if ( !isNaN(parsedDays) ) return parsedDays
      throw new Error("This days are invalid, use an integer value.")
    })

const demands = yargs =>
  yargs.demandOption(["m"])

const parse = yargs =>
  pipe(
    yargs,
    init,
    usage,
    help,
    examples,
    options,
    coercions,
    demands
  )

module.exports = {
  parse
}
