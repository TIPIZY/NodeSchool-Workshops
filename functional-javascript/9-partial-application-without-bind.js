module.exports = ns => (...args) => console.log.apply(console, [ns, ...args]);
