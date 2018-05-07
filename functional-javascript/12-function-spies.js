module.exports = (target, method) => {
  const spy = { count: 0 };
  const original = Reflect.get(target, method);
  Reflect.set(target, method, (...args) => {
    spy.count++;
    return original.apply(target, args);
  });
  return spy;
};
