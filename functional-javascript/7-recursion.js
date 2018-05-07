const f = (arr, fn, init) =>
  arr.length <= 0 ? init : f(arr.slice(1), fn, fn(init, Reflect.get(arr, 0)));

module.exports = f;
