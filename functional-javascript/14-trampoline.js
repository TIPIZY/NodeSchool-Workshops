const repeat = (op, num) => () => {
  if (num <= 0) return;
  op();
  return repeat(op, --num);
};

const trampoline = fn => {
  while (typeof fn === "function") fn = fn();
  return fn;
};

module.exports = (op, num) => trampoline(repeat(op, num));
