module.exports = inputWords =>
  inputWords.reduce((prev, curr) => {
    Reflect.set(prev, curr, Reflect.get(prev, curr) + 1 || 1);
    return prev;
  }, {});
