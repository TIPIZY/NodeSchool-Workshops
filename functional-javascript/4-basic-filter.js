module.exports = arr =>
  arr.filter(obj => obj.message.length < 50).map(obj => obj.message);
