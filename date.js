const moment = require("moment")
const pipe = require("./pipe")

const setTime = (hours, minutes, seconds) => date =>
  date
    .hours(hours)
    .minutes(minutes)
    .seconds(seconds)

const shiftDays = days => date =>
  date.add(days, "days")

const parseTime = time =>
  time.split(":")

const DATE_FORMAT = "Y-MM-D"
const today = () =>
  moment().format(DATE_FORMAT)

const TIME_FORMAT = "HH:mm:ss"
const now = () =>
  moment().format(TIME_FORMAT)

const format = date =>
  date.format(`${DATE_FORMAT}T${TIME_FORMAT} ZZ`)

const compute = (date, time, days) =>
  pipe(
    date,
    setTime(...parseTime(time)),
    shiftDays(days)
  )

module.exports = {
  format,
  today,
  now,
  compute
}
