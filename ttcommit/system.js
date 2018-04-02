const call = require("child_process").execSync

module.exports = command =>
  call(command)
