module.exports = async (userIds, load, done) => {
  return done(await Promise.all(userIds.map(userId => done(userId))));
};
