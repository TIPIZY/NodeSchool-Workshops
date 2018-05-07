const func = (operation, num) => {
  operation();
  if (num >= 0) func(operation, num - 1);
};

module.exports = func;
