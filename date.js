const moment = require("moment")

const init = date =>
  !!date ? moment(date) : moment()

const days = (date, days) =>
  date.add(days, "days")

const time = (date, hours, minutes) =>
  date.hours(hours).minutes(minutes)

const format = date =>
  date.format("Y-MM-DTHH:mm:ss ZZ")

module.exports = {
  init,
  days,
  time,
  format
}
