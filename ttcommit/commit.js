const system = require("./system")
const Date = require("./date")

const commitCommand = (formattedDate, message) =>
  [
    `GIT_AUTHOR_DATE='${formattedDate}'`,
    `GIT_COMMITTER_DATE='${formattedDate}'`,
    `git commit -m "${message}"`
  ].join(" ")

module.exports = (when, message) =>
  system( commitCommand(Date.format(when), message) )
