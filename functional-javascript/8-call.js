module.exports = (...args) =>
  args.filter(arg => Reflect.getOwnPropertyDescriptor(arg, "quack")).length;
