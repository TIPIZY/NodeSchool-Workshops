module.exports = (input, op) =>
  input.reduce((prev, curr) => prev.concat([op(curr)]), []);
