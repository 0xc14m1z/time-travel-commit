const isFunction = f =>
  typeof f === "function"

module.exports = (...arguments) =>
  arguments.reduce(
    (result, value) =>
      isFunction(value)
        ? value(result)
        : value
  )
