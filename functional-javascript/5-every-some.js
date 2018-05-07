module.exports = goodUsers => submittedUsers =>
  submittedUsers.every(subUser =>
    goodUsers.some(goodUser => goodUser.id === subUser.id)
  );
